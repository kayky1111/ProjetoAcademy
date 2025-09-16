import { AppDataSource } from "../AppDataSource";
import { Estudante } from "../models/Estudante";

export const estudanteRepository = AppDataSource.getRepository(Estudante);
