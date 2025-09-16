import { AppDataSource } from "../AppDataSource";
import { Mensagem } from "../models/Mensagem";

export const mensagemRepository = AppDataSource.getRepository(Mensagem);
