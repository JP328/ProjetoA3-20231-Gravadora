const express = require ('express');
const app = express();
app.use(express.json());

const cors = require('cors')
const mysql = require('mysql2');
const axios = require('axios'); 

require('dotenv').config()
const {DB_USER,DB_HOST,DB_DATABASE,DB_PASSWORD}  = process.env

// const feedback = {};

app.use(cors())

const connection = mysql.createConnection({
  host:DB_HOST,
  user:DB_USER,
  password: DB_PASSWORD,
  database:DB_DATABASE
})

app.get('/feedback/:id', (req, res) => {
  // res.send(feedback[req.params.id] || []);

  const idUsuario = req.params.id;
  console.log(idUsuario);

  const sql = "select * from tb_feedback where idUsuario = ?"
  
  connection.query(sql, idUsuario, (err, result) =>{
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
});

app.post('/feedback/:id', async (req, res) => {
  const idUsuario = req.params.id;
  const infosFeedback = {...req.body, idUsuario}

  const sql = "insert into tb_feedback set ?"

  connection.query(sql, [infosFeedback], (err, result) => {
    result ? res.send("Feedback Cadastrado com Sucesso!") : res.send(err)
  })

  await axios.post("http://localhost:10000/eventos", {
    tipo: "FeedbackCriado",
    dados: infosFeedback
  })
  // res.status(201).send(feedback[userId]);
});

app.delete('/feedback/:id', (req, res) => {
  // delete feedback[req.params.id] && res.send(`Feedback do usuário ---- deletado com sucesso!`);

  const idFeedback = req.params.id

  connection.query(`delete from tb_feedback where idFeedback = ${idFeedback}`, (err,result) => {
    result ? res.send("Feedback Deletado com Sucesso!") : res.send(err)
  })
});

app.listen(7000, () => {
  console.log('Feedback. Porta 7000');
});