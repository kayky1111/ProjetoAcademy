"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoController = void 0;
const AppDataSource_js_1 = require("../AppDataSource.js");
const Pagamento_js_1 = require("../models/Pagamento.js");
const pagamentoRepo = AppDataSource_js_1.AppDataSource.getRepository(Pagamento_js_1.Pagamento);
class PagamentoController {
    static async getAll(req, res) {
        const pagamentos = await pagamentoRepo.find({ relations: ["estudante"] });
        res.json(pagamentos);
    }
    static async getById(req, res) {
        const pagamento = await pagamentoRepo.findOne({
            where: { id: Number(req.params.id) },
            relations: ["estudante"],
        });
        if (!pagamento)
            return res.status(404).json({ message: "Pagamento não encontrado" });
        res.json(pagamento);
    }
    static async create(req, res) {
        const novoPagamento = pagamentoRepo.create(req.body);
        const saved = await pagamentoRepo.save(novoPagamento);
        res.status(201).json(saved);
    }
    static async update(req, res) {
        const pagamento = await pagamentoRepo.findOneBy({ id: Number(req.params.id) });
        if (!pagamento)
            return res.status(404).json({ message: "Pagamento não encontrado" });
        pagamentoRepo.merge(pagamento, req.body);
        const updated = await pagamentoRepo.save(pagamento);
        res.json(updated);
    }
    static async delete(req, res) {
        const result = await pagamentoRepo.delete(req.params.id);
        if (result.affected === 0)
            return res.status(404).json({ message: "Pagamento não encontrado" });
        res.json({ message: "Pagamento removido com sucesso" });
    }
}
exports.PagamentoController = PagamentoController;
