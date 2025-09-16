import { AppDataSource } from "../AppDataSource";
import { Professor } from "../models/Professor";

export const professorRepository = AppDataSource.getRepository(Professor);
