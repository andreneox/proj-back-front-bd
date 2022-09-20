const express = require("express");
const app = express();

//criando endpoints para backend
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

//criando endpoints para backend    
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

app.listen(3000);