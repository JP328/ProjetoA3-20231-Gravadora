const express = require ('express');
const app = express();
app.use(express.json());

const cors = require('cors')
const mysql = require('mysql2');
const axios = require('axios'); 

require('dotenv').config()
const {DB_USER,DB_HOST,DB_DATABASE,DB_PASSWORD}  = process.env

app.use(cors())

const connection = mysql.createConnection({
  host:DB_HOST,
  user:DB_USER,
  password: DB_PASSWORD,
  database:DB_DATABASE
})

app.get('/feedback/:id', (req, res) => {
  const idUsuario = req.params.id;

  const sql = "select * from tb_feedback where idUsuario = ?"
  
  connection.query(sql, idUsuario, (err, result) =>{
    result ? res.send(result) : res.send(err)
  })
});

app.post('/feedback/:id', async (req, res) => {
  // const idUsuario = req.params.id;
  const infosFeedback = {...req.body}

  const sql = "insert into tb_feedback set ?"

  connection.query(sql, [infosFeedback], (err, result) => {
    result ? res.send("Feedback Cadastrado com Sucesso!") : res.send(err)
  })

  // await axios.post("http://localhost:10000/eventos", {
  //   tipo: "FeedbackCriado",
  //   dados: infosFeedback
  // })
});

app.delete('/feedback/:id', (req, res) => {
  const idFeedback = req.params.id

  connection.query(`delete from tb_feedback where idFeedback = ${idFeedback}`, (err,result) => {
    result ? res.send("Feedback Deletado com Sucesso!") : res.send(err)
  })
});

app.listen(7000, () => {
  console.log('Feedback. Porta 7000');
});