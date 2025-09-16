import { Request, Response } from "express";
import { AppDataSource } from "../AppDataSource.js";
import { Pagamento } from "../models/Pagamento.js";

const pagamentoRepo = AppDataSource.getRepository(Pagamento);

export class PagamentoController {
  static async getAll(req: Request, res: Response) {
    const pagamentos = await pagamentoRepo.find({ relations: ["estudante"] });
    res.json(pagamentos);
  }

  static async getById(req: Request, res: Response) {
    const pagamento = await pagamentoRepo.findOne({
      where: { id: Number(req.params.id) },
      relations: ["estudante"],
    });
    if (!pagamento) return res.status(404).json({ message: "Pagamento não encontrado" });
    res.json(pagamento);
  }

  static async create(req: Request, res: Response) {
    const novoPagamento = pagamentoRepo.create(req.body);
    const saved = await pagamentoRepo.save(novoPagamento);
    res.status(201).json(saved);
  }

  static async update(req: Request, res: Response) {
    const pagamento = await pagamentoRepo.findOneBy({ id: Number(req.params.id) });
    if (!pagamento) return res.status(404).json({ message: "Pagamento não encontrado" });

    pagamentoRepo.merge(pagamento, req.body);
    const updated = await pagamentoRepo.save(pagamento);
    res.json(updated);
  }

  static async delete(req: Request, res: Response) {
    const result = await pagamentoRepo.delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: "Pagamento não encontrado" });
    res.json({ message: "Pagamento removido com sucesso" });
  }
}
