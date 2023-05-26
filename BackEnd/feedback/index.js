const express = require ('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
const axios = require('axios'); 
const { v4: uuidv4 } = require('uuid');

const feedback = {};

app.get('/feedback/:id', (req, res) => {
  // res.send(feedback[req.params.id] || []);
  const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ethyamet@12",
    database:"db_gravadora"
  })

  connection.query("select feedback from tb_feedback where idFeedback = ?",(err,result,fields) =>{
    res.json(result)
  })
});

app.post('/feedback/:id', async (req, res) => {
  const feedbackId = uuidv4()
  const userId = req.params.id;
  const message = req.body;
  
  const feedbackDoUsuario = feedback[userId] || [];
  feedbackDoUsuario.push({ ...message, feedbackId, userId })

  feedback[userId] = feedbackDoUsuario;

  await axios.post("http://localhost:10000/eventos", {
    tipo: "FeedbackCriado",
    dados: {...message, feedbackId, userId},
  })
  res.status(201).send(feedback[userId]);
});

app.delete('/feedback/:id', (req, res) => {
  // delete feedback[req.params.id] && res.send(`Feedback do usuário ---- deletado com sucesso!`);
  const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"db_gravadora",
    password:"Ethyamet@12"
  })

  connection.query("delete feedback from tb_feedback where idFeedback = ?", () => {
    res.send("Feedback deletado com sucesso!")
  })
});

app.listen(6000, () => {
  console.log('Feedback. Porta 6000');
});