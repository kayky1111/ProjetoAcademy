"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudanteService = void 0;
const estudanteRepository_1 = require("../repositories/estudanteRepository");
class EstudanteService {
    async listarTodos() {
        return estudanteRepository_1.estudanteRepository.find();
    }
    async buscarPorId(id) {
        return estudanteRepository_1.estudanteRepository.findOneBy({ id });
    }
    async criar(dados) {
        const estudante = estudanteRepository_1.estudanteRepository.create(dados);
        return estudanteRepository_1.estudanteRepository.save(estudante);
    }
    async atualizar(id, dados) {
        const estudante = await estudanteRepository_1.estudanteRepository.findOneBy({ id });
        if (!estudante)
            return null;
        estudanteRepository_1.estudanteRepository.merge(estudante, dados);
        return estudanteRepository_1.estudanteRepository.save(estudante);
    }
    async deletar(id) {
        const resultado = await estudanteRepository_1.estudanteRepository.delete(id);
        return resultado.affected !== 0;
    }
}
exports.EstudanteService = EstudanteService;
