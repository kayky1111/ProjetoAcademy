import { AppDataSource } from "../AppDataSource";
import { Curso } from "../models/Curso";

export const cursoRepository = AppDataSource.getRepository(Curso);
