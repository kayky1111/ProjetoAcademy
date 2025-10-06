"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoService = void 0;
const pagamentoRepository_1 = require("../repositories/pagamentoRepository");
class PagamentoService {
    async listarTodos() {
        return pagamentoRepository_1.pagamentoRepository.find();
    }
    async buscarPorId(id) {
        return pagamentoRepository_1.pagamentoRepository.findOneBy({ id });
    }
    async criar(dados) {
        const pagamento = pagamentoRepository_1.pagamentoRepository.create(dados);
        return pagamentoRepository_1.pagamentoRepository.save(pagamento);
    }
    async atualizar(id, dados) {
        const pagamento = await pagamentoRepository_1.pagamentoRepository.findOneBy({ id });
        if (!pagamento)
            return null;
        pagamentoRepository_1.pagamentoRepository.merge(pagamento, dados);
        return pagamentoRepository_1.pagamentoRepository.save(pagamento);
    }
    async deletar(id) {
        const resultado = await pagamentoRepository_1.pagamentoRepository.delete(id);
        return resultado.affected !== 0;
    }
}
exports.PagamentoService = PagamentoService;
