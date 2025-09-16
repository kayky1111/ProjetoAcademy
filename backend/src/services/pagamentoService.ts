import { pagamentoRepository } from "../repositories/pagamentoRepository";
import { Pagamento } from "../models/Pagamento";

export class PagamentoService {
  async listarTodos(): Promise<Pagamento[]> {
    return pagamentoRepository.find();
  }

  async buscarPorId(id: number): Promise<Pagamento | null> {
    return pagamentoRepository.findOneBy({ id });
  }

  async criar(dados: Partial<Pagamento>): Promise<Pagamento> {
    const pagamento = pagamentoRepository.create(dados);
    return pagamentoRepository.save(pagamento);
  }

  async atualizar(id: number, dados: Partial<Pagamento>): Promise<Pagamento | null> {
    const pagamento = await pagamentoRepository.findOneBy({ id });
    if (!pagamento) return null;

    pagamentoRepository.merge(pagamento, dados);
    return pagamentoRepository.save(pagamento);
  }

  async deletar(id: number): Promise<boolean> {
    const resultado = await pagamentoRepository.delete(id);
    return resultado.affected !== 0;
  }
}
