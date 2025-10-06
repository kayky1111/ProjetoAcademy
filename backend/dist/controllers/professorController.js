"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorController = void 0;
const AppDataSource_js_1 = require("../AppDataSource.js");
const Professor_js_1 = require("../models/Professor.js");
const professorRepo = AppDataSource_js_1.AppDataSource.getRepository(Professor_js_1.Professor);
class ProfessorController {
    static async getAll(req, res) {
        const professores = await professorRepo.find({ relations: ["aula"] });
        res.json(professores);
    }
    static async getById(req, res) {
        const professor = await professorRepo.findOne({
            where: { id: Number(req.params.id) },
            relations: ["aula"],
        });
        if (!professor)
            return res.status(404).json({ message: "Professor não encontrado" });
        res.json(professor);
    }
    static async create(req, res) {
        const novoProfessor = professorRepo.create(req.body);
        const saved = await professorRepo.save(novoProfessor);
        res.status(201).json(saved);
    }
    static async update(req, res) {
        const professor = await professorRepo.findOneBy({ id: Number(req.params.id) });
        if (!professor)
            return res.status(404).json({ message: "Professor não encontrado" });
        professorRepo.merge(professor, req.body);
        const updated = await professorRepo.save(professor);
        res.json(updated);
    }
    static async delete(req, res) {
        const result = await professorRepo.delete(req.params.id);
        if (result.affected === 0)
            return res.status(404).json({ message: "Professor não encontrado" });
        res.json({ message: "Professor removido com sucesso" });
    }
}
exports.ProfessorController = ProfessorController;
