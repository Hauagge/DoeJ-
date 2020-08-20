import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Cartao from './Cartao';

@Entity('Bandeira')
export default class Bandeira {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  nome: string;

  @OneToMany(type=>Cartao, cartao => cartao.bandeira)
  cartao: Cartao;
}
