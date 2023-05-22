const express = require ('express');
const app = express();
const cors = require('cors')
const axios = require('axios'); 

app.use(express.json());
// app.use(cors)
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,   //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

const { v4: uuidv4 } = require('uuid');
const usuarios = {};

app.get ('/usuarios', (req, res) => {
  res.send(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  res.send(usuarios[req.params.id] || []);
});

app.post('/usuarios', async (req, res) => {
  const idUsuario = uuidv4();
  const infosUsuario = {...req.body, idUsuario};
  console.log(req.body);
  usuarios[idUsuario] = {
    ...infosUsuario
  }

  await axios.post('http://localhost:10000/eventos', {
    tipo: "UsuarioCriado",
    dados: {
      ...infosUsuario
    }
  })

  res.status(201).send(usuarios[idUsuario]);
});

app.put('/usuarios/:id', async(req,res) => {
  
  const idUsuario = req.params.id

  const infosUsuario = {...req.body, idUsuario}

  usuarios[idUsuario] = infosUsuario
  res.send("Dados atualizados com sucesso!")

  await axios.post('http://localhost:10000/eventos', {
    tipo: "UsuarioAtualizado",
    dados: {
      ...infosUsuario
    }
  })
})

app.delete('/usuarios/:id', (req, res) => {
  delete usuarios[req.params.id] && res.send(`Usuário deletado com sucesso!`);
});

app.listen(5000, () => {
  console.log('Usuarios. Porta 5000');
});