import { cursoRepository } from "../repositories/cursoRepository";
import { Curso } from "../models/Curso";

export class CursoService {
  async listarTodos(): Promise<Curso[]> {
    return cursoRepository.find();
  }

  async buscarPorId(id: number): Promise<Curso | null> {
    return cursoRepository.findOneBy({ id });
  }

  async criar(dados: Partial<Curso>): Promise<Curso> {
    const curso = cursoRepository.create(dados);
    return cursoRepository.save(curso);
  }

  async atualizar(id: number, dados: Partial<Curso>): Promise<Curso | null> {
    const curso = await cursoRepository.findOneBy({ id });
    if (!curso) return null;

    cursoRepository.merge(curso, dados);
    return cursoRepository.save(curso);
  }

  async deletar(id: number): Promise<boolean> {
    const resultado = await cursoRepository.delete(id);
    return resultado.affected !== 0;
  }
}
