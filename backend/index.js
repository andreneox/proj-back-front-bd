const express = require("express");
const app = express();

//criando endpoints para backend
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

//criando endpoints para backend (para teste)   
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});


// Nosso backend vai armazenar as pontuações das jogadas
// Criando  uma lista  para teste com as pontuações
const lista = [
    {
      id: 1,
      nome: "And",
      pontos: 23,
    },
    {
      id: 2,
      nome: "John",
      pontos: 63,
    },
    {
      id: 3,
      nome: "Maria",
      pontos: 96,
    },
  ];
  
  // Endpoint SCORES - READ ALL - [GET] /scores
  app.get("/scores", function (req, res) {
    res.send(lista);
  });
  
  // Endpoint SCORES  - CREATE - [POST] /scores
app.post("/pontuacoes", function (req, res) {
    res.send("Criar uma pontuação");
  });
  
  app.listen(3000);

