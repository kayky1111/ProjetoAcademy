import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Mensagem } from "../models/Mensagem.js";

const mensagemRepo = AppDataSource.getRepository(Mensagem);

export class MensagemController {
  static async getAll(req: Request, res: Response) {
    const mensagens = await mensagemRepo.find();
    res.json(mensagens);
  }

  static async getById(req: Request, res: Response) {
    const mensagem = await mensagemRepo.findOneBy({ id: Number(req.params.id) });
    if (!mensagem) return res.status(404).json({ message: "Mensagem não encontrada" });
    res.json(mensagem);
  }

  static async create(req: Request, res: Response) {
    const novaMensagem = mensagemRepo.create(req.body);
    const saved = await mensagemRepo.save(novaMensagem);
    res.status(201).json(saved);
  }

  static async delete(req: Request, res: Response) {
    const result = await mensagemRepo.delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: "Mensagem não encontrada" });
    res.json({ message: "Mensagem removida com sucesso" });
  }
}
