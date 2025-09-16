import { aulaRepository } from "../repositories/aulaRepository";
import { Aula } from "../models/Aula";

export class AulaService {
  async listarTodos(): Promise<Aula[]> {
    return aulaRepository.find();
  }

  async buscarPorId(id: number): Promise<Aula | null> {
    return aulaRepository.findOneBy({ id });
  }

  async criar(dados: Partial<Aula>): Promise<Aula> {
    const aula = aulaRepository.create(dados);
    return aulaRepository.save(aula);
  }

  async atualizar(id: number, dados: Partial<Aula>): Promise<Aula | null> {
    const aula = await aulaRepository.findOneBy({ id });
    if (!aula) return null;

    aulaRepository.merge(aula, dados);
    return aulaRepository.save(aula);
  }

  async deletar(id: number): Promise<boolean> {
    const resultado = await aulaRepository.delete(id);
    return resultado.affected !== 0;
  }
}
