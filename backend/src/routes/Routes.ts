import { Router } from "express";
import { AulaController } from "../controllers/aulaController.js"; // Adicione .js
import { CursoController } from "../controllers/cursoController.js"; // Adicione .js
import { EstudanteController } from "../controllers/estudanteController.js"; // Adicione .js
import { MensagemController } from "../controllers/mensagemController.js"; // Adicione .js
import { PagamentoController } from "../controllers/pagamentoController.js"; // Adicione .js
import { ProfessorController } from "../controllers/professorController.js"; // Adicione .js

const router = Router();

// Aulas
router.get("/aulas", AulaController.getAll);
router.get("/aulas/:id", AulaController.getById);
router.post("/aulas", AulaController.create);
router.put("/aulas/:id", AulaController.update);
router.delete("/aulas/:id", AulaController.delete);

// Cursos
router.get("/cursos", CursoController.getAll);
router.get("/cursos/:id", CursoController.getById);
router.post("/cursos", CursoController.create);
router.put("/cursos/:id", CursoController.update);
router.delete("/cursos/:id", CursoController.delete);

// Estudantes
router.get("/estudantes", EstudanteController.getAll);
router.get("/estudantes/:id", EstudanteController.getById);
router.post("/estudantes", EstudanteController.create);
router.put("/estudantes/:id", EstudanteController.update);
router.delete("/estudantes/:id", EstudanteController.delete);

// Mensagens
router.get("/mensagens", MensagemController.getAll);
router.get("/mensagens/:id", MensagemController.getById);
router.post("/mensagens", MensagemController.create);
router.put("/mensagens/:id", MensagemController.update);
router.delete("/mensagens/:id", MensagemController.delete);

// Pagamentos
router.get("/pagamentos", PagamentoController.getAll);
router.get("/pagamentos/:id", PagamentoController.getById);
router.post("/pagamentos", PagamentoController.create);
router.put("/pagamentos/:id", PagamentoController.update);
router.delete("/pagamentos/:id", PagamentoController.delete);

// Professores
router.get("/professores", ProfessorController.getAll);
router.get("/professores/:id", ProfessorController.getById);
router.post("/professores", ProfessorController.create);
router.put("/professores/:id", ProfessorController.update);
router.delete("/professores/:id", ProfessorController.delete);

export default router;