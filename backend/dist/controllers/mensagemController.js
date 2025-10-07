"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemController = void 0;
const AppDataSource_js_1 = require("../AppDataSource.js");
const Mensagem_js_1 = require("../models/Mensagem.js");
const mensagemRepo = AppDataSource_js_1.AppDataSource.getRepository(Mensagem_js_1.Mensagem);
class MensagemController {
    static async getAll(req, res) {
        const mensagens = await mensagemRepo.find();
        res.json(mensagens);
    }
    static async getById(req, res) {
        const mensagem = await mensagemRepo.findOneBy({ id: Number(req.params.id) });
        if (!mensagem)
            return res.status(404).json({ message: "Mensagem não encontrada" });
        res.json(mensagem);
    }
    static async create(req, res) {
        const novaMensagem = mensagemRepo.create(req.body);
        const saved = await mensagemRepo.save(novaMensagem);
        res.status(201).json(saved);
    }
    static async delete(req, res) {
        const result = await mensagemRepo.delete(req.params.id);
        if (result.affected === 0)
            return res.status(404).json({ message: "Mensagem não encontrada" });
        res.json({ message: "Mensagem removida com sucesso" });
    }
}
exports.MensagemController = MensagemController;
