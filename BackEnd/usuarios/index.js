const express = require ('express');
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
  host: "localhost",
  user: "root",
  database: "db_gravadora",
  password: "Ethyamet@12"
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
  // const idUsuario = uuidv4();
  const nome = req.body.nomeCompleto
  const genero = req.body.genero
  const data = req.body.dataDeNascimento
  const email = req.body.email
  const cep = req.body.cep
  const portifolio = req.body.linksPortifolio
  const descricao = req.body.descricao
  const habilidades = req.body.habilidades
  const banda = req.body.banda
  const termoDeUso = req.body.termoDeUso

  // console.log(req.body);
  // usuarios[idUsuario] = {
  //   ...infosUsuario
  // }

  const sql = "insert into tb_usuario(nomeCompleto, genero, dataDeNascimento, email, cep, linkPortifolio, descricao, banda, habilidades, termoDeUso) values (?,?,?,?,?,?,?,?,?,?)"

  connection.query(sql,[nome, genero, data, email, cep, portifolio, descricao, banda, habilidades, termoDeUso],(err,result) => {
    if(err){
      res.send(err)
    }else{
      res.status(201).send("Usuário cadastrado com sucesso!", result)
    }
  })

  await axios.post('http://localhost:10000/eventos', {
    tipo: "UsuarioCriado",
    dados: {
      nome, genero, data, email, cep, portifolio, descricao, banda, habilidades, termoDeUso
    }
  })
});

app.put('/usuarios/:idUsuario', async(req,res) => {
  
  const idUsuario = req.params.idUsuario

  const nome = req.body.nomeCompleto
  const genero = req.body.genero
  const data = req.body.dataDeNascimento
  const email = req.body.email
  const cep = req.body.cep
  const portifolio = req.body.linksPortifolio
  const descricao = req.body.descricao
  const habilidades = req.body.habilidades
  const banda = req.body.banda

  connection.query(`update tb_usuario set nomeCompleto=${nome}, genero=${genero}, dataDeNascimento=${data}, email=${email}, cep=${cep}, linkPortifolio=${portifolio}, descricao=${descricao}, habilidades=${habilidades}, banda=${banda} where idUsuario = ${idUsuario}`,(err, result) =>{
    if(err){
      console.log("Erro:", err)
    }else{
      console.log("Usuário atualizado com suceeso!", result)
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