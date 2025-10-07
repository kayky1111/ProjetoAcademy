import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Aula } from "../models/Aula.js";

const aulaRepo = AppDataSource.getRepository(Aula);

export class AulaController {
  static async getAll(req: Request, res: Response) {
    try {
      const aulas = await aulaRepo.find({
        relations: ["estudante", "professor", "curso"],
      });
      res.status(200).json(aulas);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar aulas", error });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const aula = await aulaRepo.findOne({
        where: { id: parseInt(id) },
        relations: ["estudante", "professor", "curso"],
      });

      if (!aula) {
        return res.status(404).json({ message: "Aula não encontrada" });
      }

      res.status(200).json(aula);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar aula", error });
    }
  }

  static async create(req: Request, res: Response) {
    // CORREÇÃO: Usando 'data' e 'duracao' conforme o modelo
    const { data, duracao, estudanteId, professorId, cursoId } = req.body;

    if (!data || !duracao || !estudanteId || !professorId || !cursoId) {
      return res.status(400).json({ message: "Dados incompletos para criar a aula." });
    }

    try {
      const novaAula = aulaRepo.create({
        data,
        duracao,
        estudante: { id: estudanteId },
        professor: { id: professorId },
        curso: { id: cursoId },
      });

      await aulaRepo.save(novaAula);
      res.status(201).json(novaAula);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar aula", error });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    // CORREÇÃO: Usando 'data' e 'duracao'
    const { data, duracao } = req.body;

    try {
      const result = await aulaRepo.update(id, { data, duracao });

      if (result.affected === 0) {
        return res.status(404).json({ message: "Aula não encontrada para atualização" });
      }
      
      const aulaAtualizada = await aulaRepo.findOneBy({ id: parseInt(id) });
      res.status(200).json(aulaAtualizada);

    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar aula", error });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await aulaRepo.delete(id);

      if (result.affected === 0) {
        return res.status(404).json({ message: "Aula não encontrada para deletar" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar aula", error });
    }
  }
}