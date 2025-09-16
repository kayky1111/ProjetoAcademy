"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Estudante_js_1 = require("./models/Estudante.js");
const Professor_js_1 = require("./models/Professor.js");
const Aula_js_1 = require("./models/Aula.js");
const Pagamento_js_1 = require("./models/Pagamento.js");
const Mensagem_js_1 = require("./models/Mensagem.js");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost", // ou IP do servidor
    port: 3306,
    username: "root", // seu usuário MySQL
    password: "", // sua senha MySQL
    database: "maker_music", // nome do banco que vc criou
    synchronize: true, // cria/atualiza tabelas automaticamente (ótimo p/ MVP)
    logging: true,
    entities: [Estudante_js_1.Estudante, Professor_js_1.Professor, Aula_js_1.Aula, Pagamento_js_1.Pagamento, Mensagem_js_1.Mensagem],
    migrations: [],
    subscribers: [],
});
