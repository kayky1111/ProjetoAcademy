import { Router } from "express";

// Importando todas as CLASSES com letra maiúscula e caminho relativo corrigido
// Usando a extensão .js, presumindo um ambiente Node ESM/TS compilado para JS
import { AulaController } from "../controllers/aulaController.js";
import { CursoController } from "../controllers/cursoController.js";
import { EstudanteController } from "../controllers/estudanteController.js";
import { MensagemController } from "../controllers/mensagemController.js";
import { PagamentoController } from "../controllers/pagamentoController.js";
import { ProfessorController } from "../controllers/professorController.js";

const router = Router();

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
router.get("/aulas", AulaController.getAll);
router.post("/aulas", AulaController.create);

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
router.get("/aulas/:id", AulaController.getById);
router.put("/aulas/:id", AulaController.update);
router.delete("/aulas/:id", AulaController.delete);


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
router.get("/cursos", CursoController.getAll);
router.post("/cursos", CursoController.create);

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
router.get("/cursos/:id", CursoController.getById);
router.put("/cursos/:id", CursoController.update);
router.delete("/cursos/:id", CursoController.delete);

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
router.get("/estudantes", EstudanteController.getAll);
router.post("/estudantes", EstudanteController.create);

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
router.get("/estudantes/:id", EstudanteController.getById);
router.put("/estudantes/:id", EstudanteController.update);
router.delete("/estudantes/:id", EstudanteController.delete);

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
router.get("/professores", ProfessorController.getAll);

// Rotas completas de Professor
router.get("/professores/:id", ProfessorController.getById);
router.post("/professores", ProfessorController.create);
router.put("/professores/:id", ProfessorController.update);
router.delete("/professores/:id", ProfessorController.delete);


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
router.get("/pagamentos", PagamentoController.getAll);

// Rotas completas de Pagamento
router.get("/pagamentos/:id", PagamentoController.getById);
router.post("/pagamentos", PagamentoController.create);
router.put("/pagamentos/:id", PagamentoController.update);
router.delete("/pagamentos/:id", PagamentoController.delete);

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
router.get("/mensagens", MensagemController.getAll);

// Rotas completas de Mensagem
router.get("/mensagens/:id", MensagemController.getById);
router.post("/mensagens", MensagemController.create);
router.delete("/mensagens/:id", MensagemController.delete); // Mensagens não tem PUT/Update

export default router;
