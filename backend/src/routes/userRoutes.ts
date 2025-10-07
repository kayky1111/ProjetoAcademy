import { Router } from 'express';
import {
  createAula,
  deleteAula,
  getAllAulas,
  getAulaById,
  updateAula,
} from '../controllers/aulaController';
import {
  createCurso,
  deleteCurso,
  getAllCursos,
  getCursoById,
  updateCurso,
} from '../controllers/cursoController';
import {
  createEstudante,
  deleteEstudante,
  getAllEstudantes,
  getEstudanteById,
  updateEstudante,
} from '../controllers/estudanteController';
import {
  createMensagem,
  deleteMensagem,
  getAllMensagens,
  getMensagemById,
  updateMensagem,
} from '../controllers/mensagemController';
import {
  createPagamento,
  deletePagamento,
  getAllPagamentos,
  getPagamentoById,
  updatePagamento,
} from '../controllers/pagamentoController';
import {
  createProfessor,
  deleteProfessor,
  getAllProfessores,
  getProfessorById,
  updateProfessor,
} from '../controllers/professorController';

const router = Router();

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
 * description: Nome da aula.
 * descricao:
 * type: string
 * description: Descrição da aula.
 * example: "Aula de violão para iniciantes"
 * Curso:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID do curso.
 * nome:
 * type: string
 * description: Nome do curso.
 * example: "Violão Básico"
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
 * description: Email do estudante.
 * example: "aluno@example.com"
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
 * description: Matéria que o professor leciona.
 * example: "Violão"
 * Pagamento:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: ID do pagamento.
 * valor:
 * type: number
 * format: float
 * description: Valor do pagamento.
 * data:
 * type: string
 * format: date
 * description: Data do pagamento.
 * example: "2024-01-20"
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
 * description: Quem enviou a mensagem.
 */

/**
 * @swagger
 * tags:
 * - name: Aulas
 * description: Operações relacionadas a aulas
 * - name: Cursos
 * description: Operações relacionadas a cursos
 * - name: Estudantes
 * description: Operações relacionadas a estudantes
 * - name: Mensagens
 * description: Operações relacionadas a mensagens
 * - name: Pagamentos
 * description: Operações relacionadas a pagamentos
 * - name: Professores
 * description: Operações relacionadas a professores
 */

// Aulas
/**
 * @swagger
 * /aulas:
 * get:
 * summary: Retorna uma lista de todas as aulas
 * tags: [Aulas]
 * responses:
 * 200:
 * description: Lista de aulas retornada com sucesso.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Aula'
 * 500:
 * description: Erro no servidor.
 */
router.get('/aulas', getAllAulas);

/**
 * @swagger
 * /aulas/{id}:
 * get:
 * summary: Retorna uma aula pelo seu ID
 * tags: [Aulas]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID numérico da aula para obter.
 * responses:
 * 200:
 * description: Aula retornada com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Aula'
 * 404:
 * description: Aula não encontrada.
 * 500:
 * description: Erro no servidor.
 */
router.get('/aulas/:id', getAulaById);
router.post('/aulas', createAula);
router.put('/aulas/:id', updateAula);
router.delete('/aulas/:id', deleteAula);

// Cursos
/**
 * @swagger
 * /cursos:
 * get:
 * summary: Retorna uma lista de todos os cursos
 * tags: [Cursos]
 * responses:
 * 200:
 * description: Lista de cursos retornada com sucesso.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Curso'
 * 500:
 * description: Erro no servidor.
 */
router.get('/cursos', getAllCursos);

/**
 * @swagger
 * /cursos/{id}:
 * get:
 * summary: Retorna um curso pelo seu ID
 * tags: [Cursos]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID numérico do curso para obter.
 * responses:
 * 200:
 * description: Curso retornado com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Curso'
 * 404:
 * description: Curso não encontrado.
 * 500:
 * description: Erro no servidor.
 */
router.get('/cursos/:id', getCursoById);
router.post('/cursos', createCurso);
router.put('/cursos/:id', updateCurso);
router.delete('/cursos/:id', deleteCurso);

// Estudantes
/**
 * @swagger
 * /estudantes:
 * get:
 * summary: Retorna uma lista de todos os estudantes
 * tags: [Estudantes]
 * responses:
 * 200:
 * description: Lista de estudantes retornada com sucesso.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Estudante'
 * 500:
 * description: Erro no servidor.
 */
router.get('/estudantes', getAllEstudantes);

/**
 * @swagger
 * /estudantes/{id}:
 * get:
 * summary: Retorna um estudante pelo seu ID
 * tags: [Estudantes]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID numérico do estudante para obter.
 * responses:
 * 200:
 * description: Estudante retornado com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Estudante'
 * 404:
 * description: Estudante não encontrado.
 */
router.get('/estudantes/:id', getEstudanteById);
router.post('/estudantes', createEstudante);
router.put('/estudantes/:id', updateEstudante);
router.delete('/estudantes/:id', deleteEstudante);

// Mensagens
router.get('/mensagens', getAllMensagens);
router.get('/mensagens/:id', getMensagemById);
router.post('/mensagens', createMensagem);
router.put('/mensagens/:id', updateMensagem);
router.delete('/mensagens/:id', deleteMensagem);

// Pagamentos
router.get('/pagamentos', getAllPagamentos);
router.get('/pagamentos/:id', getPagamentoById);
router.post('/pagamentos', createPagamento);
router.put('/pagamentos/:id', updatePagamento);
router.delete('/pagamentos/:id', deletePagamento);

// Professores
router.get('/professores', getAllProfessores);
router.get('/professores/:id', getProfessorById);
router.post('/professores', createProfessor);
router.put('/professores/:id', updateProfessor);
router.delete('/professores/:id', deleteProfessor);

export default router;