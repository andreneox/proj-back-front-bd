const express = require("express");

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "proj-back-front-bd";

// Declaração da função assincrona main()
async function main() {
    // Realizar a conexão com o MongoClient
    // MongoClient -> MongoDatabase -> MongoCollection
  
    // Conexões com o client podem levar um tempo para
    //  concluir. Portanto, utilizamos o mecanismo de
    //  Promises do JavaScript, que permitem aguardar
    //  esse tempo. Para isso, vamos usar o async/await.
  
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("scores");

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

}

  // Executamos no final  a função main()
main();
