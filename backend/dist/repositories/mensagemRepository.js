"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensagemRepository = void 0;
const AppDataSource_1 = require("../AppDataSource");
const Mensagem_1 = require("../models/Mensagem");
exports.mensagemRepository = AppDataSource_1.AppDataSource.getRepository(Mensagem_1.Mensagem);
