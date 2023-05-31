const express = require ('express');
const mysql = require('mysql2');
require('dotenv').config()
const app = express();
app.use(express.json());
const axios = require('axios'); 
const { v4: uuidv4 } = require('uuid');
const {DB_USER,DB_HOST,DB_DATABASE,DB_PASSWORD}  = process.env

const feedback = {};

const connection = mysql.createConnection({
  host:DB_HOST,
  user:DB_USER,
  password:DB_PASSWORD,
  database:DB_DATABASE
})

app.get('/feedback/:idFeedback', (req, res) => {
  // res.send(feedback[req.params.id] || []);

  const idFeedback = req.params.idFeedback;

  const sql = "select * from tb_feedback where idFeedback = ?"
  
  connection.query(sql, idFeedback,(err,result) =>{
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
});

app.post('/feedback', async (req, res) => {
  // const feedbackId = uuidv4()
  const userId = req.params.id;
  // const message = req.body;
  
  // const feedbackDoUsuario = feedback[userId] || [];
  // feedbackDoUsuario.push({ ...message, feedbackId, userId })

  // feedback[userId] = feedbackDoUsuario;

  // const nome = req.body.nome
  // const infosFeedback = req.body

  const infosFeedback = req.body

  const sql = "insert into tb_feedback set ?"

  connection.query(sql, infosFeedback, (err,results) => {
    if(err){
      res.send(err)
    }else{
      res.send("Feedback cadastrado com sucesso!")
    }
  })

  await axios.post("http://localhost:10000/eventos", {
    tipo: "FeedbackCriado",
    dados: infosFeedback
  })
  // res.status(201).send(feedback[userId]);
});

app.delete('/feedback/:idUsuario', (req, res) => {
  // delete feedback[req.params.id] && res.send(`Feedback do usuário ---- deletado com sucesso!`);

  const userId = req.params.idUsuario

  connection.query(`delete from tb_feedback where idFeedback = ${userId}`, (err,result) => {
    if(err){
      res.send(err)
    }else{
      res.send("Usuário excluído com sucesso!")
    }
  })
});

app.listen(6000, () => {
  console.log('Feedback. Porta 6000');
});