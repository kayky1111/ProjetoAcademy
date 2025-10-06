import "reflect-metadata";
import { DataSource } from "typeorm";
import { Curso } from "./models/Curso";
import { Estudante } from "./models/Estudante";
import { Professor } from "./models/Professor";
import { Aula } from "./models/Aula";
import { Pagamento } from "./models/Pagamento";
import { Mensagem } from "./models/Mensagem";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",       // ou IP do servidor
  port: 3306,
  username: "root",        // seu usuário MySQL
  password: "makermusic2025",   // sua senha MySQL
  database: "maker_music", // nome do banco que vc criou
  synchronize: true,       // cria/atualiza tabelas automaticamente (ótimo p/ MVP)
  logging: true,
  entities: [Estudante, Professor, Aula, Pagamento, Mensagem,Curso],
  migrations: [],
  subscribers: [],
});
