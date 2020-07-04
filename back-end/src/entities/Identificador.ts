import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Identificador')
export default class Identificador {
  @PrimaryColumn()
  ID: number;

  @Column()
  nome: string;
}
