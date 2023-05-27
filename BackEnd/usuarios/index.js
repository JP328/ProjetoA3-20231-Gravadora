const express = require ('express');
const cors = require('cors')
const app = express();
app.use(express.json());
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
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"db_gravadora",
  password:"Ethyamet@12"
})

app.get ('/usuarios', (req, res) => {
  // res.send(usuarios);
  const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"db_gravadora",
    password:"Ethyamet@12"
  })

  connection.query("select * from tb_usuario", (result,err) => {
    console.log(result)
    console.log(err)
  })
});

app.get('/usuarios/:id', (req, res) => {
  // res.send(usuarios[req.params.id] || []);
  const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"db_gravadora",
    password:"Ethyamet@12"
  })

  connection.query("select * from tb_usuario where idUsuario = ?", (err, result) => {
    console.log(err)
    console.log(result)
  })
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
  const userID = req.params.id
  
  connection.query(`delete from tb_usuario where idUsuario = ${userID}`,(err, result) => {
    if(err){
      res.send("Erro ao excluir usuário:", err)
    }
    else{
      res.send(result) && res.send("Usuário excluído com sucesso!")
    }
    // console.log(err)
    // res.send("Usuário excluído com sucesso!")
  })

});

app.listen(5000, () => {
  console.log('Usuarios. Porta 5000');
});