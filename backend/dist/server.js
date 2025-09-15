"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppDataSource_js_1 = require("./AppDataSource.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
AppDataSource_js_1.AppDataSource.initialize()
    .then(() => {
    console.log("Banco conectado com sucesso!");
    app.listen(3000, () => {
        console.log("Servidor rodando em http://localhost:3000");
    });
})
    .catch((err) => {
    console.error("Erro ao conectar no banco:", err);
});
