import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Estudante } from "../models/Estudante.js";

const estudanteRepo = AppDataSource.getRepository(Estudante);

export class EstudanteController {
  static async getAll(req: Request, res: Response) {
    const estudantes = await estudanteRepo.find({ relations: ["pagamento", "aula"] });
    res.json(estudantes);
  }

  static async getById(req: Request, res: Response) {
    const estudante = await estudanteRepo.findOne({
      where: { id: Number(req.params.id) },
      relations: ["pagamento", "aula"],
    });
    if (!estudante) return res.status(404).json({ message: "Estudante não encontrado" });
    res.json(estudante);
  }

  static async create(req: Request, res: Response) {
    try {
      const novoEstudante = estudanteRepo.create(req.body);
      const saved = await estudanteRepo.save(novoEstudante);
      res.status(201).json(saved);
    } catch (error: any) {
      res.status(400).json({ message: "Erro ao criar estudante", error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    const estudante = await estudanteRepo.findOneBy({ id: Number(req.params.id) });
    if (!estudante) return res.status(404).json({ message: "Estudante não encontrado" });

    estudanteRepo.merge(estudante, req.body);
    const updated = await estudanteRepo.save(estudante);
    res.json(updated);
  }

  static async delete(req: Request, res: Response) {
    const result = await estudanteRepo.delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: "Estudante não encontrado" });
    res.json({ message: "Estudante removido com sucesso" });
  }
}
