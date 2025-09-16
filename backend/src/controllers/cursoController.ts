// Em src/controllers/cursoController.ts

import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Curso } from "../models/Curso.js"; // Verifique se o nome do modelo é "Curso"

const cursoRepo = AppDataSource.getRepository(Curso);

export class CursoController {
  static async getAll(req: Request, res: Response) {
    const cursos = await cursoRepo.find({ relations: ["aula"] });
    res.json(cursos);
  }

  static async getById(req: Request, res: Response) {
    const curso = await cursoRepo.findOne({
      where: { id: Number(req.params.id) },
      relations: ["aula"],
    });
    if (!curso) return res.status(404).json({ message: "Curso não encontrado" });
    res.json(curso);
  }

  static async create(req: Request, res: Response) {
    const novoCurso = cursoRepo.create(req.body);
    const saved = await cursoRepo.save(novoCurso);
    res.status(201).json(saved);
  }

  static async update(req: Request, res: Response) {
    const curso = await cursoRepo.findOneBy({ id: Number(req.params.id) });
    if (!curso) return res.status(404).json({ message: "Curso não encontrado" });

    cursoRepo.merge(curso, req.body);
    const updated = await cursoRepo.save(curso);
    res.json(updated);
  }

  static async delete(req: Request, res: Response) {
    const result = await cursoRepo.delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: "Curso não encontrado" });
    res.json({ message: "Curso removido com sucesso" });
  }
}