import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Aula } from "./Aula";

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  instrumento!: string; // Ex: Violão, Piano

  // Relacionamentos
  @OneToMany(() => Aula, aula => aula.professor)
  aula!: Aula[];
}
