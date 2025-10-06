import swaggerJSDoc from 'swagger-jsdoc';

// Configurações básicas da sua API
const options = {
  // Configuração principal da documentação (OpenAPI 3.0)
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
    // Aqui incluímos os esquemas (models) definidos no userRoutes.ts
    // Se a documentação dos schemas estiver separada, é melhor incluí-la no 'apis'
  },
  // CRUCIAL: Lista de arquivos que contêm as anotações JSDoc do Swagger.
  // O erro 'TypeError' geralmente ocorre se esta lista não encontrar seus arquivos.
  apis: [
    './src/routes/*.ts', // Procura por todos os arquivos .ts na pasta 'src/routes'
  ],
};

// Gera a especificação final do Swagger (Swagger Spec Object)
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
