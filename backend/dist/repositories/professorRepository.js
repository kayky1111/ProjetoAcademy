"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.professorRepository = void 0;
const AppDataSource_1 = require("../AppDataSource");
const Professor_1 = require("../models/Professor");
exports.professorRepository = AppDataSource_1.AppDataSource.getRepository(Professor_1.Professor);
