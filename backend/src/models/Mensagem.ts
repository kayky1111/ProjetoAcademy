import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Mensagem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  remetenteId!: number;   // id do remetente (Aluno ou Professor)

  @Column()
  destinatorioId!: number; // id do destinatário

  @Column()
  conteudo!: string;

  @Column()
  horaEnvio!: Date;
}
