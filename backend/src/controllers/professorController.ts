import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Professor } from "../models/Professor.js";

const professorRepo = AppDataSource.getRepository(Professor);

export class ProfessorController {
  static async getAll(req: Request, res: Response) {
    try {
      const professores = await professorRepo.find();
      res.status(200).json(professores);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar professores", error });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const professor = await professorRepo.findOneBy({ id: parseInt(id) });
      if (!professor) {
        return res.status(404).json({ message: "Professor não encontrado" });
      }
      res.status(200).json(professor);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar professor", error });
    }
  }

  /**
   * Cria um novo professor passando o objeto de dados diretamente para o método save.
   */
  static async create(req: Request, res: Response) {
    const { nome, especialidade, email, senha } = req.body;

    if (!nome || !especialidade || !email) {
      return res.status(400).json({ message: "Nome, especialidade, email e senha são obrigatórios." });
    }

    try {
      // O método .save() cria e salva a nova entidade em um único passo
      const novoProfessor = await professorRepo.save({
        nome,
        especialidade,
        email,
        senha,
      });

      res.status(201).json(novoProfessor);
    } catch (error) {
      if ((error as any).code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: "Este email já está cadastrado." });
      }
      res.status(500).json({ message: "Erro ao criar professor", error });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, instrumento, email, } = req.body;

    try {
      const result = await professorRepo.update(id, { nome, instrumento, email });

      if (result.affected === 0) {
        return res.status(404).json({ message: "Professor não encontrado para atualização" });
      }
      
      const professorAtualizado = await professorRepo.findOneBy({ id: parseInt(id) });
      res.status(200).json(professorAtualizado);
    } catch (error) {
      if ((error as any).code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: "Este email já está em uso por outro professor." });
      }
      res.status(500).json({ message: "Erro ao atualizar professor", error });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await professorRepo.delete(id);

      if (result.affected === 0) {
        return res.status(404).json({ message: "Professor não encontrado para deletar" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar professor", error });
    }
  }
}