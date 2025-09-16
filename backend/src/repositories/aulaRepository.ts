import { AppDataSource } from "../AppDataSource";
import { Aula } from "../models/Aula";

export const aulaRepository = AppDataSource.getRepository(Aula);
