import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Lista from './Lista';
import Produto from './Produto';

@Entity('Item')
export default class Item {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @ManyToOne(() => Produto, produto => produto.item)
  produto: Produto;

  @ManyToOne(() => Lista, lista => lista.item)
  lista: Lista;

  @Column()
  quantidade: number;

  @Column()
  desconto: number;  
}
