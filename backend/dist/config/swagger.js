"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Academy Project API Documentation',
            version: '1.0.0',
            description: 'Documentação da API RESTful para o sistema da Academy, gerenciando Aulas, Cursos, Estudantes, Professores e mais.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de Desenvolvimento Local',
            },
        ],
    },
    // CRUCIAL: Alterar o caminho para os ficheiros compilados .js
    apis: [
        './dist/routes/*.js', // Apontar para os ficheiros JS na pasta dist
    ],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
