const express = require ('express');
const cors = require('cors')
const app = express();
app.use(express.json());
const axios = require('axios');
require('dotenv').config()
const cors = require('cors')
const mysql = require('mysql2')
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
      res.send.json(result)
    }
  })
});

app.get('/usuarios/:idUsuario', (req, res) => {

const userId = req.params.idUsuario

  connection.query(`select * from tb_usuario where idUsuario =${userId}`, (err, result) => {
    if(err){
      console.log(err)
    }else{
      res.json(result)
    }
  })
});

app.post('/usuarios', async (req, res) => {
  const sql = "insert into tb_usuario set ?"

  const infosUsuario = req.body

  connection.query(sql,infosUsuario,(err,result) => {
    if(err){
      res.send(err)
    }else{
      res.send(req.body)
    }
  })

  await axios.post('http://localhost:10000/eventos', {
    tipo: "UsuarioCriado",
    dados: {
      ...infosUsuario
    }
  })
});

app.put('/usuarios/:idUsuario', async(req,res) => {
  
  const idUsuario = req.params.idUsuario

  const infosUsuario = req.body

  const sql = `update tb_usuario set ? where idUsuario =${idUsuario}`
  connection.query(sql,infosUsuario, (err, result) =>{
    if(err){
      res.send(err)
    }else{
      res.send(req.body)
    }
  })

  // const infosUsuario = {...req.body, idUsuario}

  // usuarios[idUsuario] = infosUsuario
  
  res.send("Dados atualizados com sucesso!")

  await axios.post('http://localhost:10000/eventos', {
    tipo: "UsuarioAtualizado",
    dados: {
      ...infosUsuario
    }
  })
})

app.delete('/usuarios/:idUsuario', (req, res) => {
  const userID = req.params.idUsuario

  const sql ="delete from tb_usuario where idUsuario = ?"
  
  connection.query(sql, req.params.idUsuario,(err, result) => {
    if(err){
      res.send(err)
    }
    else{
      res.send("Usuário excluído com sucesso!")
    }
  })

});

app.listen(5000, () => {
  console.log('Usuarios. Porta 5000');
});