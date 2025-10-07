import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Mensagem } from "../models/Mensagem.js";

const mensagemRepo = AppDataSource.getRepository(Mensagem);

export class MensagemController {
  static async getAll(req: Request, res: Response) {
    try {
      const mensagens = await mensagemRepo.find();
      res.status(200).json(mensagens);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar mensagens", error });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const mensagem = await mensagemRepo.findOneBy({ id: parseInt(id) });
      if (!mensagem) {
        return res.status(404).json({ message: "Mensagem não encontrada" });
      }
      res.status(200).json(mensagem);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar mensagem", error });
    }
  }

  static async create(req: Request, res: Response) {
    // CORREÇÃO: Usando 'conteudo' conforme o modelo
    const { conteudo, remetente, destinatario } = req.body;

    if (!conteudo || !remetente || !destinatario) {
      return res.status(400).json({ message: "Conteúdo, remetente e destinatário são obrigatórios." });
    }

  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { conteudo } = req.body;

    try {
      const result = await mensagemRepo.update(id, { conteudo });

      if (result.affected === 0) {
        return res.status(404).json({ message: "Mensagem não encontrada para atualização" });
      }
      
      const mensagemAtualizada = await mensagemRepo.findOneBy({ id: parseInt(id) });
      res.status(200).json(mensagemAtualizada);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar mensagem", error });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await mensagemRepo.delete(id);

      if (result.affected === 0) {
        return res.status(404).json({ message: "Mensagem não encontrada para deletar" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar mensagem", error });
    }
  }
}