import express from "express";

// @types/express
const app = express();

/**
 *  GET     => Buscar uma informação
 *  POST    => Inserir (Criar) uma informação
 *  PUT     => Alterar uma informação
 *  PATCH   => Alterar uma informação específica
 *  DELETE  => Remover um dado
 */

app.get("/teste", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Olá NLW");
});

app.post("/teste-post", (request, response) => {
  return response.send("Olá NLW método Post");
});

// http://localhost:5001
app.listen(5001, () => console.log("Server is running"));

// Código: #together
