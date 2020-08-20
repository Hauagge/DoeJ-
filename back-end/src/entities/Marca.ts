import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Produto from './Produto';

@Entity('Marca')
export default class Marca {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  nome: string;

  @OneToMany(() => Produto, produto => produto.marca)
  produto: Produto[];
}
