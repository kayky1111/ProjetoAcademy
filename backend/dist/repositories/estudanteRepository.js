"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estudanteRepository = void 0;
const AppDataSource_1 = require("../AppDataSource");
const Estudante_1 = require("../models/Estudante");
exports.estudanteRepository = AppDataSource_1.AppDataSource.getRepository(Estudante_1.Estudante);
