import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './User';
import Marca from './Marca';

@Entity('Produto')
export default class Produto {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => User, user => user.ID)
  user_ID: User;

  @ManyToOne(() => Marca, marca => marca.ID)
  marca_ID: Marca;
}
