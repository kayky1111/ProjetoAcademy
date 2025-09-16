import { estudanteRepository } from "../repositories/estudanteRepository";
import { Estudante } from "../models/Estudante";

export class EstudanteService {
  async listarTodos(): Promise<Estudante[]> {
    return estudanteRepository.find();
  }

  async buscarPorId(id: number): Promise<Estudante | null> {
    return estudanteRepository.findOneBy({ id });
  }

  async criar(dados: Partial<Estudante>): Promise<Estudante> {
    const estudante = estudanteRepository.create(dados);
    return estudanteRepository.save(estudante);
  }

  async atualizar(id: number, dados: Partial<Estudante>): Promise<Estudante | null> {
    const estudante = await estudanteRepository.findOneBy({ id });
    if (!estudante) return null;

    estudanteRepository.merge(estudante, dados);
    return estudanteRepository.save(estudante);
  }

  async deletar(id: number): Promise<boolean> {
    const resultado = await estudanteRepository.delete(id);
    return resultado.affected !== 0;
  }
}
