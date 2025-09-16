import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Aula } from "../models/Aula.js";

const aulaRepo = AppDataSource.getRepository(Aula);

export class AulaController {
  static async getAll(req: Request, res: Response) {
    const aulas = await aulaRepo.find({ relations: ["estudante", "professor", "curso"] });
    res.json(aulas);
  }

  static async getById(req: Request, res: Response) {
    const aula = await aulaRepo.findOne({
      where: { id: Number(req.params.id) },
      relations: ["estudante", "professor", "curso"],
    });
    if (!aula) return res.status(404).json({ message: "Aula não encontrada" });
    res.json(aula);
  }

  static async create(req: Request, res: Response) {
    const novaAula = aulaRepo.create(req.body);
    const saved = await aulaRepo.save(novaAula);
    res.status(201).json(saved);
  }

  static async update(req: Request, res: Response) {
    const aula = await aulaRepo.findOneBy({ id: Number(req.params.id) });
    if (!aula) return res.status(404).json({ message: "Aula não encontrada" });

    aulaRepo.merge(aula, req.body);
    const updated = await aulaRepo.save(aula);
    res.json(updated);
  }

  static async delete(req: Request, res: Response) {
    const result = await aulaRepo.delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: "Aula não encontrada" });
    res.json({ message: "Aula removida com sucesso" });
  }
}
