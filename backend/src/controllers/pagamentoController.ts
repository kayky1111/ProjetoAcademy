import { Request, Response } from "express";
// CORREÇÃO 1: Adicionar a extensão .js nas importações
import { AppDataSource } from "../AppDataSource.js";
import { Pagamento } from "../models/Pagamento.js";

const pagamentoRepo = AppDataSource.getRepository(Pagamento);

export class PagamentoController {
  static async getAll(req: Request, res: Response) {
    try {
      const pagamentos = await pagamentoRepo.find({
        relations: ["estudante"],
      });
      res.status(200).json(pagamentos);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar pagamentos", error });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const pagamento = await pagamentoRepo.findOne({
        where: { id: parseInt(id) },
        relations: ["estudante"],
      });

      if (!pagamento) {
        return res.status(404).json({ message: "Pagamento não encontrado" });
      }

      res.status(200).json(pagamento);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar pagamento", error });
    }
  }

  static async create(req: Request, res: Response) {
    const { valor, data, estudanteId } = req.body;

    if (!valor || !data || !estudanteId) {
      return res.status(400).json({ message: "Valor, data e ID do estudante são obrigatórios." });
    }

    try {
      const novoPagamento = await pagamentoRepo.save({
        valor,
        data,
        estudante: { id: estudanteId },
      });
      res.status(201).json(novoPagamento);
    } catch (error) {
      // CORREÇÃO 2: Verificação de erro mais segura
      if ((error as any).code === 'ER_NO_REFERENCED_ROW_2') {
          return res.status(404).json({ message: "Estudante com o ID fornecido não foi encontrado." });
      }
      res.status(500).json({ message: "Erro ao criar pagamento", error });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { saldo, data } = req.body;

    try {
      const result = await pagamentoRepo.update(id, { saldo, data });

      if (result.affected === 0) {
        return res.status(404).json({ message: "Pagamento não encontrado para atualização" });
      }
      
      const pagamentoAtualizado = await pagamentoRepo.findOneBy({ id: parseInt(id) });
      res.status(200).json(pagamentoAtualizado);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar pagamento", error });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await pagamentoRepo.delete(id);

      if (result.affected === 0) {
        return res.status(404).json({ message: "Pagamento não encontrado para deletar" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar pagamento", error });
    }
  }
}