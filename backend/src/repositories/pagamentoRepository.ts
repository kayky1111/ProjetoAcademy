import { AppDataSource } from "../AppDataSource";
import { Pagamento } from "../models/Pagamento";

export const pagamentoRepository = AppDataSource.getRepository(Pagamento);
