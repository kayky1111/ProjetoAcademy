"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata"); // Necessário para o TypeORM
const AppDataSource_1 = require("./AppDataSource"); // Corrija o caminho se necessário
// Imports do Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./config/swagger"));
// Import de rotas
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rota da documentação
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
// Usando as rotas
app.use(userRoutes_1.default);
AppDataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log('Banco conectado com sucesso!');
    app.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000');
        console.log('Documentação da API disponível em http://localhost:3000/api-docs');
    });
})
    .catch((err) => {
    console.error('Erro ao conectar no banco:', err);
});
