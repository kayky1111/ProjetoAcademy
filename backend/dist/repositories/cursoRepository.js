"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoRepository = void 0;
const AppDataSource_1 = require("../AppDataSource");
const Curso_1 = require("../models/Curso");
exports.cursoRepository = AppDataSource_1.AppDataSource.getRepository(Curso_1.Curso);
