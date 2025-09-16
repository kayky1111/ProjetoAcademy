import { professorRepository } from "../repositories/professorRepository";
import { Professor } from "../models/Professor";

export class ProfessorService {
  async listarTodos(): Promise<Professor[]> {
    return professorRepository.find();
  }

  async buscarPorId(id: number): Promise<Professor | null> {
    return professorRepository.findOneBy({ id });
  }

  async criar(dados: Partial<Professor>): Promise<Professor> {
    const professor = professorRepository.create(dados);
    return professorRepository.save(professor);
  }

  async atualizar(id: number, dados: Partial<Professor>): Promise<Professor | null> {
    const professor = await professorRepository.findOneBy({ id });
    if (!professor) return null;

    professorRepository.merge(professor, dados);
    return professorRepository.save(professor);
  }

  async deletar(id: number): Promise<boolean> {
    const resultado = await professorRepository.delete(id);
    return resultado.affected !== 0;
  }
}
