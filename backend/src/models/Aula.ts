import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Estudante } from "./Estudante";
import { Professor } from "./Professor";
import { Curso } from "./Curso";

@Entity()
export class Aula {
  @PrimaryGeneratedColumn()
  // usamos o sinal de exclamação para indicar que o campo será inicializado posteriormente
  id!: number;

  @Column()
  data!: Date;

  @Column()
  duracao!: number; // em minutos

  // Relacionamentos
  @ManyToOne(() => Estudante, estudante => estudante.aula)
  estudante!: Estudante;

  @ManyToOne(() => Professor, professor => professor.aula)
  professor!: Professor;

  @ManyToOne(() => Curso, curso => curso.aula)
  curso!: Curso;
}
