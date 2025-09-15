import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Aula } from "./Aula.js";

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  preco!: number;

  // Relacionamentos
  @OneToMany(() => Aula, aula => aula.curso)
  aula!: Aula[];
}
