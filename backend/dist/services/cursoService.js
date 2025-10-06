"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoService = void 0;
const cursoRepository_1 = require("../repositories/cursoRepository");
class CursoService {
    async listarTodos() {
        return cursoRepository_1.cursoRepository.find();
    }
    async buscarPorId(id) {
        return cursoRepository_1.cursoRepository.findOneBy({ id });
    }
    async criar(dados) {
        const curso = cursoRepository_1.cursoRepository.create(dados);
        return cursoRepository_1.cursoRepository.save(curso);
    }
    async atualizar(id, dados) {
        const curso = await cursoRepository_1.cursoRepository.findOneBy({ id });
        if (!curso)
            return null;
        cursoRepository_1.cursoRepository.merge(curso, dados);
        return cursoRepository_1.cursoRepository.save(curso);
    }
    async deletar(id) {
        const resultado = await cursoRepository_1.cursoRepository.delete(id);
        return resultado.affected !== 0;
    }
}
exports.CursoService = CursoService;
