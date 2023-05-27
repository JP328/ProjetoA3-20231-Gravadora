const express = require ('express');
const cors = require('cors')
const app = express();
app.use(express.json());
const axios = require('axios');
require('dotenv').config()
const {DB_USER,DB_HOST,DB_DATABASE,DB_PASSWORD}  = process.env


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
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASSWORD
})

app.get ('/usuarios', (req, res) => {
  connection.query("select * from tb_usuario", (result,err) => {
    if(err){
      console.log("Erro:", err)
    }else{
      res.json(result)
    }
  })
});

app.get('/usuarios/:id', (req, res) => {
  connection.query("select * from tb_usuario where idUsuario = ?", (err, result) => {
    if(err){
      console.log("Erro:", err)
    }else{
      res.json(result)
    }
  })
});

app.post('/usuarios', async (req, res) => {
  // const idUsuario = uuidv4();
  // const infosUsuario = {...req.body, idUsuario};
  // console.log(req.body);
  // usuarios[idUsuario] = {
  //   ...infosUsuario
  // }

  connection.query("")

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
      res.json(result) && res.send("Usuário excluído com sucesso!")
    }
  })

});

app.listen(5000, () => {
  console.log('Usuarios. Porta 5000');
});