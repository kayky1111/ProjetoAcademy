import { mensagemRepository } from "../repositories/mensagemRepository";
import { Mensagem } from "../models/Mensagem";

export class MensagemService {
  async listarTodos(): Promise<Mensagem[]> {
    return mensagemRepository.find();
  }

  async buscarPorId(id: number): Promise<Mensagem | null> {
    return mensagemRepository.findOneBy({ id });
  }

  async criar(dados: Partial<Mensagem>): Promise<Mensagem> {
    const mensagem = mensagemRepository.create(dados);
    return mensagemRepository.save(mensagem);
  }

  async atualizar(id: number, dados: Partial<Mensagem>): Promise<Mensagem | null> {
    const mensagem = await mensagemRepository.findOneBy({ id });
    if (!mensagem) return null;

    mensagemRepository.merge(mensagem, dados);
    return mensagemRepository.save(mensagem);
  }

  async deletar(id: number): Promise<boolean> {
    const resultado = await mensagemRepository.delete(id);
    return resultado.affected !== 0;
  }
}
