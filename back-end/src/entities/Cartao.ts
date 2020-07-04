import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import User from './User';
import Bandeira from './Bandeira';

@Entity('Cartao')
export default class Cartao {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  descricao: string;

  @Column()
  numero: number;

  @Column()
  agencia: string;

  @Column()
  conta: string;

  @ManyToOne(() => Bandeira, bandeira => bandeira.ID)
  bandeira_ID: Bandeira;

  @ManyToOne(() => User, user => user.id)
  user_ID: User;
}
