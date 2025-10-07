"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemService = void 0;
const mensagemRepository_1 = require("../repositories/mensagemRepository");
class MensagemService {
    async listarTodos() {
        return mensagemRepository_1.mensagemRepository.find();
    }
    async buscarPorId(id) {
        return mensagemRepository_1.mensagemRepository.findOneBy({ id });
    }
    async criar(dados) {
        const mensagem = mensagemRepository_1.mensagemRepository.create(dados);
        return mensagemRepository_1.mensagemRepository.save(mensagem);
    }
    async atualizar(id, dados) {
        const mensagem = await mensagemRepository_1.mensagemRepository.findOneBy({ id });
        if (!mensagem)
            return null;
        mensagemRepository_1.mensagemRepository.merge(mensagem, dados);
        return mensagemRepository_1.mensagemRepository.save(mensagem);
    }
    async deletar(id) {
        const resultado = await mensagemRepository_1.mensagemRepository.delete(id);
        return resultado.affected !== 0;
    }
}
exports.MensagemService = MensagemService;
