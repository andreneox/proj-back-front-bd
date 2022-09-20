const express = require("express");
const app = express();


// Vamos sinalizar para o express que estamos usando o 
// JSON no body das requisições
app.use(express.json());

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
  app.post("/scores", function (req, res) {
  
    // Pegando o item do corpo da requisição
  const item = req.body;
  
  // Adicionando o item na lista
  lista.push({
    id: lista.length + 1,
    nome: item.nome,
    pontos: item.pontos,
  });

  // Resposta positiva para o item criado
  res.send("Item criado com sucesso!");
});
  
  app.listen(3000);

