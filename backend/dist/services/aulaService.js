"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaService = void 0;
const aulaRepository_1 = require("../repositories/aulaRepository");
class AulaService {
    async listarTodos() {
        return aulaRepository_1.aulaRepository.find();
    }
    async buscarPorId(id) {
        return aulaRepository_1.aulaRepository.findOneBy({ id });
    }
    async criar(dados) {
        const aula = aulaRepository_1.aulaRepository.create(dados);
        return aulaRepository_1.aulaRepository.save(aula);
    }
    async atualizar(id, dados) {
        const aula = await aulaRepository_1.aulaRepository.findOneBy({ id });
        if (!aula)
            return null;
        aulaRepository_1.aulaRepository.merge(aula, dados);
        return aulaRepository_1.aulaRepository.save(aula);
    }
    async deletar(id) {
        const resultado = await aulaRepository_1.aulaRepository.delete(id);
        return resultado.affected !== 0;
    }
}
exports.AulaService = AulaService;
