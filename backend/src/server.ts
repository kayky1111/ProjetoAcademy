import express from "express";
import { AppDataSource } from "./AppDataSource.js";

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado com sucesso!");

    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco:", err);
  });
