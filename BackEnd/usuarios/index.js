const express = require ('express');
const app = express();
app.use(express.json());

const cors = require('cors')
const axios = require('axios');
const mysql = require('mysql2')

require('dotenv').config()
const {DB_USER,DB_HOST,DB_DATABASE,DB_PASSWORD}  = process.env

app.use(cors());

const connection = mysql.createConnection({
  host:DB_HOST,
  user:DB_USER,
  database:DB_DATABASE,
  password:DB_PASSWORD
})

app.get ('/usuarios', (req, res) => {
  connection.query("select * from tb_usuario", (err, result) => {
    result ? res.json(result) : res.send(err)
  })
});

// app.get('/usuarios/validation/user/', (req, res) => {
//   const validateInfos = req.params

//   const sql = `select * from tb_usuario where email = "${validateInfos.email}" and senha = "${validateInfos.password}"`
  
//   connection.query(sql, (err, result) => {
//     result ? res.json(result) : res.send(err)
//   })  
// });

app.post('/usuarios/validation/', (req, res) => {
  const validateInfos = req.body

  let sql;
  
  validateInfos.standardUser ?
    sql = `select * from tb_usuario where email = "${validateInfos.email}" and senha = "${validateInfos.password}"`
  :
    sql = `select * from tb_adm where email = "${validateInfos.email}" and senha = "${validateInfos.password}"`

  connection.query(sql, (err, result) => {
    result ? res.json(result) : res.send(err)
  })  
});

app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id

  connection.query(`select * from tb_usuario where idUsuario =${userId}`, (err, result) => {
    result ? res.json(result) : res.send(err)
  })
});

app.post('/usuarios', async (req, res) => {
  let formattedInputs = {"linksPortifolio": "", "habilidades": ""}

  const links = req.body.linksPortifolio
  links.map((link) => formattedInputs.linksPortifolio += "  " + link)
  
  const habilidades = req.body.habilidades
  habilidades.map((habilidade) => formattedInputs.habilidades += "  " + habilidade)
  
  const sql = "insert into tb_usuario set ?"
  const infosUsuario = {...req.body, ...formattedInputs}

  console.log(infosUsuario);
  connection.query(sql,infosUsuario,(err,result) => {
    result ? res.send("Dados cadastrados com Sucesso!") : res.send(err)
  })

  // await axios.post('http://localhost:10000/eventos', {
  //   tipo: "UsuarioCriado",
  //   dados: {
  //     ...infosUsuario
  //   }
  // })
});

app.put('/usuarios/:id', async(req,res) => {
  let formattedInputs = {"linksPortifolio": "", "habilidades": ""}

  const links = req.body.linksPortifolio
  links.map((link) => formattedInputs.linksPortifolio += "  " + link)
  
  const habilidades = req.body.habilidades
  habilidades.map((habilidade) => formattedInputs.habilidades += "  " + habilidade)
  
  const idUsuario = req.params.id
  const sql = `update tb_usuario set ? where idUsuario =${idUsuario}`

  const infosUsuario = {...req.body, ...formattedInputs}

  connection.query(sql,infosUsuario, (err, result) =>{
    result ? res.send("Dados Atualizados com Sucesso!") : res.send(err)
  })

  // await axios.post('http://localhost:10000/eventos', {
  //   tipo: "UsuarioAtualizado",
  //   dados: {
  //     ...infosUsuario
  //   }
  // })
})

app.delete('/usuarios/:id', (req, res) => {
  const userID = req.params.id

  const sql ="delete from tb_usuario where idUsuario = ?"
  
  connection.query(sql, userID,(err, result) => {
    result ? res.send("Dados Excluídos com Sucesso!") : res.send(err)
  })
});

app.listen(5000, () => {
  console.log('Usuarios. Porta 5000');
});