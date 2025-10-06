"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Importando todas as CLASSES com letra maiúscula e caminho relativo corrigido
// Usando a extensão .js, presumindo um ambiente Node ESM/TS compilado para JS
const aulaController_js_1 = require("../controllers/aulaController.js");
const cursoController_js_1 = require("../controllers/cursoController.js");
const estudanteController_js_1 = require("../controllers/estudanteController.js");
const mensagemController_js_1 = require("../controllers/mensagemController.js");
const pagamentoController_js_1 = require("../controllers/pagamentoController.js");
const professorController_js_1 = require("../controllers/professorController.js");
const router = (0, express_1.Router)();
// A Instanciação dos controllers foi removida, as rotas agora usam métodos estáticos (ex: AulaController.getAll)
/**
 * @swagger
 * components:
 * schemas:
 * Aula:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID da aula.
 * nome:
 * type: string
 * description: Nome/título da aula.
 * descricao:
 * type: string
 * description: Descrição do conteúdo da aula.
 * example:
 * id: 1
 * nome: "Introdução ao TypeScript"
 * descricao: "Uma aula sobre os conceitos básicos."
 * Curso:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID do curso.
 * nome:
 * type: string
 * description: Nome do curso.
 * example:
 * id: 1
 * nome: "Desenvolvimento Web Full Stack"
 * Estudante:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID do estudante.
 * nome:
 * type: string
 * description: Nome do estudante.
 * email:
 * type: string
 * format: email
 * description: E-mail do estudante.
 * example:
 * id: 1
 * nome: "João da Silva"
 * email: "joao.silva@email.com"
 * Professor:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID do professor.
 * nome:
 * type: string
 * description: Nome do professor.
 * materia:
 * type: string
 * description: Área de especialização/matéria lecionada.
 * example:
 * id: 10
 * nome: "Maria Oliveira"
 * materia: "Programação Back-end"
 * Pagamento:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID do pagamento.
 * valor:
 * type: number
 * format: float
 * description: Valor pago.
 * data:
 * type: string
 * format: date-time
 * description: Data e hora do pagamento.
 * example:
 * id: 100
 * valor: 49.99
 * data: "2023-10-06T10:00:00Z"
 * Mensagem:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID da mensagem.
 * conteudo:
 * type: string
 * description: Conteúdo da mensagem.
 * remetente:
 * type: string
 * description: ID do remetente (Estudante ou Professor).
 * example:
 * id: 50
 * conteudo: "Dúvida sobre a Aula 5."
 * remetente: "Estudante 1"
 */
/**
 * @swagger
 * tags:
 * - name: Aulas
 * description: Endpoints para gerenciamento de aulas
 * - name: Cursos
 * description: Endpoints para gerenciamento de cursos
 * - name: Estudantes
 * description: Endpoints para gerenciamento de estudantes
 * - name: Mensagens
 * description: Endpoints para gerenciamento de mensagens
 * - name: Pagamentos
 * description: Endpoints para gerenciamento de pagamentos
 * - name: Professores
 * description: Endpoints para gerenciamento de professores
 */
// --- Rotas de Aula ---
/**
 * @swagger
 * /aulas:
 * get:
 * summary: Lista todas as aulas
 * tags: [Aulas]
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Aula'
 * post:
 * summary: Cria uma nova aula
 * tags: [Aulas]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aula'
 * responses:
 * 201:
 * description: Aula criada com sucesso
 * 400:
 * description: Dados inválidos
 */
router.get("/aulas", aulaController_js_1.AulaController.getAll);
router.post("/aulas", aulaController_js_1.AulaController.create);
/**
 * @swagger
 * /aulas/{id}:
 * get:
 * summary: Obtém uma aula pelo ID
 * tags: [Aulas]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID da aula
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aula'
 * 404:
 * description: Aula não encontrada
 * put:
 * summary: Atualiza uma aula pelo ID
 * tags: [Aulas]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID da aula
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aula'
 * responses:
 * 200:
 * description: Aula atualizada
 * 404:
 * description: Aula não encontrada
 * delete:
 * summary: Deleta uma aula pelo ID
 * tags: [Aulas]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID da aula
 * responses:
 * 204:
 * description: Aula deletada
 * 404:
 * description: Aula não encontrada
 */
router.get("/aulas/:id", aulaController_js_1.AulaController.getById);
router.put("/aulas/:id", aulaController_js_1.AulaController.update);
router.delete("/aulas/:id", aulaController_js_1.AulaController.delete);
// --- Rotas de Curso ---
/**
 * @swagger
 * /cursos:
 * get:
 * summary: Lista todos os cursos
 * tags: [Cursos]
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Curso'
 * post:
 * summary: Cria um novo curso
 * tags: [Cursos]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Curso'
 * responses:
 * 201:
 * description: Curso criado
 */
router.get("/cursos", cursoController_js_1.CursoController.getAll);
router.post("/cursos", cursoController_js_1.CursoController.create);
/**
 * @swagger
 * /cursos/{id}:
 * get:
 * summary: Obtém um curso pelo ID
 * tags: [Cursos]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID do curso
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Curso'
 * 404:
 * description: Curso não encontrado
 * put:
 * summary: Atualiza um curso pelo ID
 * tags: [Cursos]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID do curso
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Curso'
 * responses:
 * 200:
 * description: Curso atualizado
 * 404:
 * description: Curso não encontrado
 * delete:
 * summary: Deleta um curso pelo ID
 * tags: [Cursos]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID do curso
 * responses:
 * 204:
 * description: Curso deletado
 * 404:
 * description: Curso não encontrado
 */
router.get("/cursos/:id", cursoController_js_1.CursoController.getById);
router.put("/cursos/:id", cursoController_js_1.CursoController.update);
router.delete("/cursos/:id", cursoController_js_1.CursoController.delete);
// --- Rotas de Estudante ---
/**
 * @swagger
 * /estudantes:
 * get:
 * summary: Lista todos os estudantes
 * tags: [Estudantes]
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Estudante'
 * post:
 * summary: Cria um novo estudante
 * tags: [Estudantes]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Estudante'
 * responses:
 * 201:
 * description: Estudante criado
 */
router.get("/estudantes", estudanteController_js_1.EstudanteController.getAll);
router.post("/estudantes", estudanteController_js_1.EstudanteController.create);
/**
 * @swagger
 * /estudantes/{id}:
 * get:
 * summary: Obtém um estudante pelo ID
 * tags: [Estudantes]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID do estudante
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Estudante'
 * 404:
 * description: Estudante não encontrado
 * delete:
 * summary: Deleta um estudante pelo ID
 * tags: [Estudantes]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID do estudante
 * responses:
 * 204:
 * description: Estudante deletado
 * 404:
 * description: Estudante não encontrado
 */
router.get("/estudantes/:id", estudanteController_js_1.EstudanteController.getById);
router.put("/estudantes/:id", estudanteController_js_1.EstudanteController.update);
router.delete("/estudantes/:id", estudanteController_js_1.EstudanteController.delete);
// --- Rotas de Professor ---
/**
 * @swagger
 * /professores:
 * get:
 * summary: Lista todos os professores
 * tags: [Professores]
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Professor'
 */
router.get("/professores", professorController_js_1.ProfessorController.getAll);
// Rotas completas de Professor
router.get("/professores/:id", professorController_js_1.ProfessorController.getById);
router.post("/professores", professorController_js_1.ProfessorController.create);
router.put("/professores/:id", professorController_js_1.ProfessorController.update);
router.delete("/professores/:id", professorController_js_1.ProfessorController.delete);
// --- Rotas de Pagamento ---
/**
 * @swagger
 * /pagamentos:
 * get:
 * summary: Lista todos os pagamentos
 * tags: [Pagamentos]
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Pagamento'
 */
router.get("/pagamentos", pagamentoController_js_1.PagamentoController.getAll);
// Rotas completas de Pagamento
router.get("/pagamentos/:id", pagamentoController_js_1.PagamentoController.getById);
router.post("/pagamentos", pagamentoController_js_1.PagamentoController.create);
router.put("/pagamentos/:id", pagamentoController_js_1.PagamentoController.update);
router.delete("/pagamentos/:id", pagamentoController_js_1.PagamentoController.delete);
// --- Rotas de Mensagem ---
/**
 * @swagger
 * /mensagens:
 * get:
 * summary: Lista todas as mensagens
 * tags: [Mensagens]
 * responses:
 * 200:
 * description: Sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Mensagem'
 */
router.get("/mensagens", mensagemController_js_1.MensagemController.getAll);
// Rotas completas de Mensagem
router.get("/mensagens/:id", mensagemController_js_1.MensagemController.getById);
router.post("/mensagens", mensagemController_js_1.MensagemController.create);
router.delete("/mensagens/:id", mensagemController_js_1.MensagemController.delete); // Mensagens não tem PUT/Update
exports.default = router;
