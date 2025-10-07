import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Estudante } from "./Estudante";

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  saldo!: number;

  @Column()
  status!: string; // "PENDING", "PAID"

  @Column()
  data!: Date;

  // Relacionamento
  @ManyToOne(() => Estudante, estudante => estudante.pagamento)
  estudante!: Estudante;
}
