const express = require ('express');
const app = express();
app.use(express.json());
const axios = require('axios'); 

const { v4: uuidv4 } = require('uuid');
const usuarios = {};

app.get ('/usuarios', (req, res) => {
  res.send(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  res.send(usuarios[req.params.id] || []);
});

app.post('/usuarios', async (req, res) => {
  const idUsuario = uuidv4();
  const infosUsuario = req.body;
  console.log(infosUsuario);

  usuarios[idUsuario] = {
    idUsuario,
    infosUsuario
  }

  res.status(201).send(usuarios[idUsuario, infosUsuario]);
});

app.listen(3100, () => {
  console.log('Usuarios. Porta 3100');
});