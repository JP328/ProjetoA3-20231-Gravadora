const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
)

const eventos = [];

app.post('/eventos', async (req, res) => {
  const evento = req.body;
  eventos.push(evento)
  try {
    await axios.post('http://localhost:5000/eventos', evento);
  } catch (error) {}
  try {
    await axios.post("http://localhost:6000/eventos", evento);
  } catch (error) {}
  try {
    await axios.post("http://localhost:7000/eventos", evento);
  } catch (error) {}
  res.status(200).send({ message: "Working..." });
});

app.get('/eventos', (req, res) => {
  console.log(eventos);
  res.send(eventos)
})

app.listen(10000, () => {
  console.log('Barramento de eventos. Porta 10000.')
})