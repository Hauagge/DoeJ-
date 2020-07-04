import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';
import Produto from './Produto';

@Entity('ImgProduto')
export default class ImgProduto {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  img: string;

  @Column()
  descricao: string;

  @ManyToOne(() => Produto, produto => produto.ID)
  produto_ID: Produto;
}
