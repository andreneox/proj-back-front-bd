const express = require("express");

const { MongoClient } = require("mongodb");

//instalando o mongodb com o npm no terminal
// npm i mongodb
const url = "mongodb://localhost:27017";
// adicionando abaixo a  URL de conexao ao mongodb atlas - na nuvem
//const url = "mongodb+srv://admin:pimNRf33rCj2ndzz@cluster0.lyzypg8.mongodb.net/";
const dbName = "proj-back-front-bd";

// Declaração da função assincrona main()
async function main() {
    // Realizar a conexão com o MongoClient
    // MongoClient -> MongoDatabase -> MongoCollection
  
    // Conexões com o client podem levar um tempo para
    //  concluir. Portanto, utilizamos o mecanismo de
    //  Promises do JavaScript, que permitem aguardar
    //  esse tempo. Para isso, vamos usar o async/await.
  
    console.log("Conectando com o banco de dados...");

    // Vamos desativar o banco de dados 
    /*
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("scores");
    */

    console.log("Banco de dados conectado com sucesso!");

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
//Colocando a lista em comentarios pois foi realizado seu
//proposito (teste)
/*
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
  */

  // Endpoint SCORES - READ ALL - [GET] /scores
  // Implementando o DB no metodo GET no endpoint /scores
  // Adicionando Ordenação e limite no metodo GET no /scores 
  app.get("/scores", async function (req, res) {
    const itens = await collection
      .find()
      .sort({ pontos: -1 })
      .limit(10)
      .toArray();

    res.send(itens);
  });
  
  // Endpoint SCORES  - CREATE - [POST] /scores 
  app.post("/scores", async function (req, res) {
  
    // Pegando o item do corpo da requisição
  const item = req.body;
  
  // Adicionando o item na lista
  //deixando em comentario, pois foi realizado testes nele
  //lista.push({
   // id: lista.length + 1,
   // nome: item.nome,
   // pontos: item.pontos,
   //});
  
   await collection.insertOne(item);
  
   // Resposta para o item criado
  res.send(item);
});
 
// configurando a porta para o heroku
app.listen(process.env.PORT || 3000);

}

  // Executamos no final  a função main()
main();
