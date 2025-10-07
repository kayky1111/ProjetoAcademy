"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorService = void 0;
const professorRepository_1 = require("../repositories/professorRepository");
class ProfessorService {
    async listarTodos() {
        return professorRepository_1.professorRepository.find();
    }
    async buscarPorId(id) {
        return professorRepository_1.professorRepository.findOneBy({ id });
    }
    async criar(dados) {
        const professor = professorRepository_1.professorRepository.create(dados);
        return professorRepository_1.professorRepository.save(professor);
    }
    async atualizar(id, dados) {
        const professor = await professorRepository_1.professorRepository.findOneBy({ id });
        if (!professor)
            return null;
        professorRepository_1.professorRepository.merge(professor, dados);
        return professorRepository_1.professorRepository.save(professor);
    }
    async deletar(id) {
        const resultado = await professorRepository_1.professorRepository.delete(id);
        return resultado.affected !== 0;
    }
}
exports.ProfessorService = ProfessorService;
