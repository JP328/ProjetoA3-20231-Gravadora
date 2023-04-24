const express = require ('express');
const app = express();
app.use(express.json());
const axios = require('axios'); 

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

app.delete('/usuarios/:id', (req, res) => {
  delete usuarios[req.params.id] && res.send(`Usuário deletado com sucesso!`);
});

app.listen(5000, () => {
  console.log('Usuarios. Porta 5000');
});