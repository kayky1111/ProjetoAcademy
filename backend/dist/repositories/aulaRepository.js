"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aulaRepository = void 0;
const AppDataSource_1 = require("../AppDataSource");
const Aula_1 = require("../models/Aula");
exports.aulaRepository = AppDataSource_1.AppDataSource.getRepository(Aula_1.Aula);
