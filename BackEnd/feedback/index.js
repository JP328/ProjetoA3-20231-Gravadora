const express = require ('express');
const mysql = require('mysql2');
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

app.get('/feedback/:id', (req, res) => {
  // res.send(feedback[req.params.id] || []);

  const idFeedback = req.params.idFeedback;
  
  connection.query(`select * from tb_feedback  where idFeedback =${idFeedback}`,(err,result) =>{
    if(err){
      console.log("Erro:",err)
    }else{
      console.log(result)
    }
  })
});

app.post('/feedback/:id', async (req, res) => {
  // const feedbackId = uuidv4()
  const userId = req.params.id;
  // const message = req.body;
  
  // const feedbackDoUsuario = feedback[userId] || [];
  // feedbackDoUsuario.push({ ...message, feedbackId, userId })

  // feedback[userId] = feedbackDoUsuario;

  const nome = req.body.nome
  const feedback = req.body.feedback

  const sql = `insert into tb_feedback(nome,feedback) values (${nome}, ${feedback})`

  connection.query(sql,[nome,feedback], (err,results) => {
    if(err){
      console.log("Erro:", err)
    }else{
      console.log(results)
    }
  })

  await axios.post("http://localhost:10000/eventos", {
    tipo: "FeedbackCriado",
    dados: {...message, feedbackId, userId},
  })
  res.status(201).send(feedback[userId]);
});

app.delete('/feedback/:id', (req, res) => {
  // delete feedback[req.params.id] && res.send(`Feedback do usuário ---- deletado com sucesso!`);

  const userId = req.params.idUsuario

  connection.query(`delete feedback from tb_feedback where idFeedback = ${userId}`, (err,result) => {
    if(err){
      console.log("Erro:", err)
    }else{
      console.log("Usuário excluído com sucesso!", result)
    }
  })
});

app.listen(6000, () => {
  console.log('Feedback. Porta 6000');
});