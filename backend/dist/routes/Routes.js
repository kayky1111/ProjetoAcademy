"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Importando todas as CLASSES com letra maiúscula e caminho relativo corrigido
const aulaController_js_1 = require("../controllers/aulaController.js");
const cursoController_js_1 = require("../controllers/cursoController.js");
const estudanteController_js_1 = require("../controllers/estudanteController.js");
const mensagemController_js_1 = require("../controllers/mensagemController.js");
const pagamentoController_js_1 = require("../controllers/pagamentoController.js");
const professorController_js_1 = require("../controllers/professorController.js");
const router = (0, express_1.Router)();
// --- Rotas de Aula ---
router.get("/aulas", aulaController_js_1.AulaController.getAll);
router.get("/aulas/:id", aulaController_js_1.AulaController.getById);
router.post("/aulas", aulaController_js_1.AulaController.create);
router.put("/aulas/:id", aulaController_js_1.AulaController.update);
router.delete("/aulas/:id", aulaController_js_1.AulaController.delete);
// --- Rotas de Curso ---
router.get("/cursos", cursoController_js_1.CursoController.getAll);
router.get("/cursos/:id", cursoController_js_1.CursoController.getById);
router.post("/cursos", cursoController_js_1.CursoController.create);
router.put("/cursos/:id", cursoController_js_1.CursoController.update);
router.delete("/cursos/:id", cursoController_js_1.CursoController.delete);
// --- Rotas de Estudante ---
router.get("/estudantes", estudanteController_js_1.EstudanteController.getAll);
router.get("/estudantes/:id", estudanteController_js_1.EstudanteController.getById);
router.post("/estudantes", estudanteController_js_1.EstudanteController.create);
router.put("/estudantes/:id", estudanteController_js_1.EstudanteController.update);
router.delete("/estudantes/:id", estudanteController_js_1.EstudanteController.delete);
// --- Rotas de Mensagem ---
// Note que o MensagemController não possuía um método 'update'.
router.get("/mensagens", mensagemController_js_1.MensagemController.getAll);
router.get("/mensagens/:id", mensagemController_js_1.MensagemController.getById);
router.post("/mensagens", mensagemController_js_1.MensagemController.create);
router.delete("/mensagens/:id", mensagemController_js_1.MensagemController.delete);
// --- Rotas de Pagamento ---
router.get("/pagamentos", pagamentoController_js_1.PagamentoController.getAll);
router.get("/pagamentos/:id", pagamentoController_js_1.PagamentoController.getById);
router.post("/pagamentos", pagamentoController_js_1.PagamentoController.create);
router.put("/pagamentos/:id", pagamentoController_js_1.PagamentoController.update);
router.delete("/pagamentos/:id", pagamentoController_js_1.PagamentoController.delete);
// --- Rotas de Professor ---
router.get("/professores", professorController_js_1.ProfessorController.getAll);
router.get("/professores/:id", professorController_js_1.ProfessorController.getById);
router.post("/professores", professorController_js_1.ProfessorController.create);
router.put("/professores/:id", professorController_js_1.ProfessorController.update);
router.delete("/professores/:id", professorController_js_1.ProfessorController.delete);
exports.default = router;
