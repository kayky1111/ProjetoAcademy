import { Request, Response } from "express";
// CORREÇÃO: Adicione a extensão .js no final das importações
import { AppDataSource } from "../AppDataSource.js";
import { Curso } from "../models/Curso.js";

const cursoRepo = AppDataSource.getRepository(Curso);

export class CursoController {
  static async getAll(req: Request, res: Response) {
    try {
      const cursos = await cursoRepo.find();
      res.status(200).json(cursos);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar cursos", error });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const curso = await cursoRepo.findOneBy({ id: parseInt(id) });
      if (!curso) {
        return res.status(404).json({ message: "Curso não encontrado" });
      }
      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar curso", error });
    }
  }

  static async create(req: Request, res: Response) {
    // Usando 'titulo' e 'descricao' conforme o modelo de Curso
    const { titulo, descricao } = req.body;

    if (!titulo) {
      return res.status(400).json({ message: "O título do curso é obrigatório." });
    }

    try {
      const novoCurso = await cursoRepo.save({ titulo, descricao });
      res.status(201).json(novoCurso);
    } catch (error) {
      if ((error as any).code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ message: "Já existe um curso com este título." });
      }
      res.status(500).json({ message: "Erro ao criar curso", error });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { titulo, descricao } = req.body;

    try {
      const result = await cursoRepo.update(id, { titulo });

      if (result.affected === 0) {
        return res.status(404).json({ message: "Curso não encontrado para atualização" });
      }
      
      const cursoAtualizado = await cursoRepo.findOneBy({ id: parseInt(id) });
      res.status(200).json(cursoAtualizado);

    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar curso", error });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await cursoRepo.delete(id);

      if (result.affected === 0) {
        return res.status(404).json({ message: "Curso não encontrado para deletar" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar curso", error });
    }
  }
}