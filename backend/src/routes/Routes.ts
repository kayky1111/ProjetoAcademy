import { Router } from "express";

// Importando todas as CLASSES com letra maiúscula e caminho relativo corrigido
import { AulaController } from "../controllers/aulaController.js";
import { CursoController } from "../controllers/cursoController.js";
import { EstudanteController } from "../controllers/estudanteController.js";
import { MensagemController } from "../controllers/mensagemController.js";
import { PagamentoController } from "../controllers/pagamentoController.js";
import { ProfessorController } from "../controllers/professorController.js";

const router = Router();

// --- Rotas de Aula ---
router.get("/aulas", AulaController.getAll);
router.get("/aulas/:id", AulaController.getById);
router.post("/aulas", AulaController.create);
router.put("/aulas/:id", AulaController.update);
router.delete("/aulas/:id", AulaController.delete);

// --- Rotas de Curso ---
router.get("/cursos", CursoController.getAll);
router.get("/cursos/:id", CursoController.getById);
router.post("/cursos", CursoController.create);
router.put("/cursos/:id", CursoController.update);
router.delete("/cursos/:id", CursoController.delete);

// --- Rotas de Estudante ---
router.get("/estudantes", EstudanteController.getAll);
router.get("/estudantes/:id", EstudanteController.getById);
router.post("/estudantes", EstudanteController.create);
router.put("/estudantes/:id", EstudanteController.update);
router.delete("/estudantes/:id", EstudanteController.delete);

// --- Rotas de Mensagem ---
// Note que o MensagemController não possuía um método 'update'.
router.get("/mensagens", MensagemController.getAll);
router.get("/mensagens/:id", MensagemController.getById);
router.post("/mensagens", MensagemController.create);
router.delete("/mensagens/:id", MensagemController.delete);

// --- Rotas de Pagamento ---
router.get("/pagamentos", PagamentoController.getAll);
router.get("/pagamentos/:id", PagamentoController.getById);
router.post("/pagamentos", PagamentoController.create);
router.put("/pagamentos/:id", PagamentoController.update);
router.delete("/pagamentos/:id", PagamentoController.delete);

// --- Rotas de Professor ---
router.get("/professores", ProfessorController.getAll);
router.get("/professores/:id", ProfessorController.getById);
router.post("/professores", ProfessorController.create);
router.put("/professores/:id", ProfessorController.update);
router.delete("/professores/:id", ProfessorController.delete);

export default router;