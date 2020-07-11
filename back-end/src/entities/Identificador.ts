import { Entity, PrimaryColumn, OneToMany } from 'typeorm';
import User from './User';
@Entity('Identificador')
export default class Identificador {
  @PrimaryColumn()
  id: number;

  @OneToMany(() => User, user => user)
  nome: string;
}
