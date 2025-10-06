import express from 'express';
import 'reflect-metadata'; // Necessário para o TypeORM
import { AppDataSource } from './AppDataSource'; // Corrija o caminho se necessário

// Imports do Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

// Import de rotas
import  router  from './routes/userRoutes';

const app = express();
app.use(express.json());

// Rota da documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usando as rotas
app.use(router);

AppDataSource.initialize()
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
