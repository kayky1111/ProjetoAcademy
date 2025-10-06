"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaController = void 0;
const AppDataSource_js_1 = require("../AppDataSource.js");
const Aula_js_1 = require("../models/Aula.js");
const aulaRepo = AppDataSource_js_1.AppDataSource.getRepository(Aula_js_1.Aula);
class AulaController {
    static async getAll(req, res) {
        const aulas = await aulaRepo.find({ relations: ["estudante", "professor", "curso"] });
        res.json(aulas);
    }
    static async getById(req, res) {
        const aula = await aulaRepo.findOne({
            where: { id: Number(req.params.id) },
            relations: ["estudante", "professor", "curso"],
        });
        if (!aula)
            return res.status(404).json({ message: "Aula não encontrada" });
        res.json(aula);
    }
    static async create(req, res) {
        const novaAula = aulaRepo.create(req.body);
        const saved = await aulaRepo.save(novaAula);
        res.status(201).json(saved);
    }
    static async update(req, res) {
        const aula = await aulaRepo.findOneBy({ id: Number(req.params.id) });
        if (!aula)
            return res.status(404).json({ message: "Aula não encontrada" });
        aulaRepo.merge(aula, req.body);
        const updated = await aulaRepo.save(aula);
        res.json(updated);
    }
    static async delete(req, res) {
        const result = await aulaRepo.delete(req.params.id);
        if (result.affected === 0)
            return res.status(404).json({ message: "Aula não encontrada" });
        res.json({ message: "Aula removida com sucesso" });
    }
}
exports.AulaController = AulaController;
