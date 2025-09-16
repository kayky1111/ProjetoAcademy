import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Professor } from "../models/Professor.js";

const professorRepo = AppDataSource.getRepository(Professor);

export class ProfessorController {
  static async getAll(req: Request, res: Response) {
    const professores = await professorRepo.find({ relations: ["aula"] });
    res.json(professores);
  }

  static async getById(req: Request, res: Response) {
    const professor = await professorRepo.findOne({
      where: { id: Number(req.params.id) },
      relations: ["aula"],
    });
    if (!professor) return res.status(404).json({ message: "Professor não encontrado" });
    res.json(professor);
  }

  static async create(req: Request, res: Response) {
    const novoProfessor = professorRepo.create(req.body);
    const saved = await professorRepo.save(novoProfessor);
    res.status(201).json(saved);
  }

  static async update(req: Request, res: Response) {
    const professor = await professorRepo.findOneBy({ id: Number(req.params.id) });
    if (!professor) return res.status(404).json({ message: "Professor não encontrado" });

    professorRepo.merge(professor, req.body);
    const updated = await professorRepo.save(professor);
    res.json(updated);
  }

  static async delete(req: Request, res: Response) {
    const result = await professorRepo.delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: "Professor não encontrado" });
    res.json({ message: "Professor removido com sucesso" });
  }
}
