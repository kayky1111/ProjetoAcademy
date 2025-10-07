"use strict";
// Em src/controllers/cursoController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoController = void 0;
const AppDataSource_js_1 = require("../AppDataSource.js");
const Curso_js_1 = require("../models/Curso.js"); // Verifique se o nome do modelo é "Curso"
const cursoRepo = AppDataSource_js_1.AppDataSource.getRepository(Curso_js_1.Curso);
class CursoController {
    static async getAll(req, res) {
        const cursos = await cursoRepo.find({ relations: ["aula"] });
        res.json(cursos);
    }
    static async getById(req, res) {
        const curso = await cursoRepo.findOne({
            where: { id: Number(req.params.id) },
            relations: ["aula"],
        });
        if (!curso)
            return res.status(404).json({ message: "Curso não encontrado" });
        res.json(curso);
    }
    static async create(req, res) {
        const novoCurso = cursoRepo.create(req.body);
        const saved = await cursoRepo.save(novoCurso);
        res.status(201).json(saved);
    }
    static async update(req, res) {
        const curso = await cursoRepo.findOneBy({ id: Number(req.params.id) });
        if (!curso)
            return res.status(404).json({ message: "Curso não encontrado" });
        cursoRepo.merge(curso, req.body);
        const updated = await cursoRepo.save(curso);
        res.json(updated);
    }
    static async delete(req, res) {
        const result = await cursoRepo.delete(req.params.id);
        if (result.affected === 0)
            return res.status(404).json({ message: "Curso não encontrado" });
        res.json({ message: "Curso removido com sucesso" });
    }
}
exports.CursoController = CursoController;
