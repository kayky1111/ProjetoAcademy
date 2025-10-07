import { Request, Response } from "express";
// CORREÇÃO 1: Adicionar a extensão .js nas importações
import { AppDataSource } from "../AppDataSource.js";
import { Estudante } from "../models/Estudante.js";

const estudanteRepo = AppDataSource.getRepository(Estudante);

export class EstudanteController {
  static async getAll(req: Request, res: Response) {
    try {
      const estudantes = await estudanteRepo.find();
      res.status(200).json(estudantes);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar estudantes", error });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const estudante = await estudanteRepo.findOneBy({ id: parseInt(id) });
      if (!estudante) {
        return res.status(404).json({ message: "Estudante não encontrado" });
      }
      res.status(200).json(estudante);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar estudante", error });
    }
  }

  static async create(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ message: "Nome, email e senha são obrigatórios." });
    }

    try {
      const novoEstudante = await estudanteRepo.save({ nome, email, senha });
      res.status(201).json(novoEstudante);
    } catch (error) {
      // CORREÇÃO 2: Verificação de erro mais segura
      if ((error as any).code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: "Este email já está cadastrado." });
      }
      res.status(500).json({ message: "Erro ao criar estudante", error });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
      const result = await estudanteRepo.update(id, { nome, email, senha });

      if (result.affected === 0) {
        return res.status(404).json({ message: "Estudante não encontrado para atualização" });
      }
      
      const estudanteAtualizado = await estudanteRepo.findOneBy({ id: parseInt(id) });
      res.status(200).json(estudanteAtualizado);
    } catch (error) {
      // CORREÇÃO 2: Verificação de erro mais segura
      if ((error as any).code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: "Este email já está em uso por outro estudante." });
      }
      res.status(500).json({ message: "Erro ao atualizar estudante", error });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await estudanteRepo.delete(id);

      if (result.affected === 0) {
        return res.status(404).json({ message: "Estudante não encontrado para deletar" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar estudante", error });
    }
  }
}