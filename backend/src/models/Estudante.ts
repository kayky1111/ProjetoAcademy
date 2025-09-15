import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// devemos usar o .js para se referir ao arquivo ts ja compilado, pois o node ESM so entende .js
import { Pagamento } from "./Pagamento.js";
import { Aula } from "./Aula.js";

@Entity()
export class Estudante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column({ unique: true })
  email!: string;

  @Column({select: false})
  senha!: string;

  // Relacionamentos
  @OneToMany(() => Pagamento, pagamento => pagamento.estudante)
  pagamento!: Pagamento[];

  @OneToMany(() => Aula, aula => aula.estudante)
  aula!: Aula[];
}
