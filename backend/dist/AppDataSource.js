"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Curso_1 = require("./models/Curso");
const Estudante_1 = require("./models/Estudante");
const Professor_1 = require("./models/Professor");
const Aula_1 = require("./models/Aula");
const Pagamento_1 = require("./models/Pagamento");
const Mensagem_1 = require("./models/Mensagem");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost", // ou IP do servidor
    port: 3306,
    username: "root", // seu usuário MySQL
    password: "makermusic2025", // sua senha MySQL
    database: "maker_music", // nome do banco que vc criou
    synchronize: true, // cria/atualiza tabelas automaticamente (ótimo p/ MVP)
    logging: true,
    entities: [Estudante_1.Estudante, Professor_1.Professor, Aula_1.Aula, Pagamento_1.Pagamento, Mensagem_1.Mensagem, Curso_1.Curso],
    migrations: [],
    subscribers: [],
});
