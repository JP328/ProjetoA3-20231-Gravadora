const express = require("express");
const axios = require("axios")
const app = express();
app.use(express.json());

const baseDeDados = {}

const funcoes = {
  UsuarioCriado: (usuario) => {
    baseDeDados[usuario.idUsuario] = usuario;
  },
  FeedbackCriado: (feedback) => {
    const feedbacks = baseDeDados[feedback.userId]["feedbacks"] || [];
    feedbacks.push(feedback);
    baseDeDados[feedback.userId]["feedbacks"] = feedbacks;
  },
  UsuarioAtualizado: (usuario) => {
    baseDeDados[usuario.idUsuario] = usuario;
  }
};

app.get("/usuarios", (req, res) => {
  res.status(200).send(baseDeDados);
});

app.post("/eventos", (req, res) => {
  try{
    console.log(req.body);
    funcoes[req.body.tipo](req.body.dados);
  }
  catch (err){}
  res.status(200).send(baseDeDados);
});

app.listen(7000, async () => {
  const res = await axios.get("http://localhost:10000/eventos");
  res.data.forEach((valor, indice, colecao) => {
    try {
      funcoes[valor.tipo](valor.dados);
    } catch (err) {console.log(err)}
  });
  console.log("Base De Dados. Porta 7000")
});