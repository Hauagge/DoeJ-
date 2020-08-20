import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import User from './User';
import Marca from './Marca';
import ImgProduto from './ImgProduto';
import Item from './Item';
import VoucherItem from './VoucherItem';

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

  @ManyToOne(() => User, user => user.produto)
  user: User;

  @ManyToOne(() => Marca, marca => marca.produto)
  marca: Marca;

  @OneToMany(() => ImgProduto, imgProduto => imgProduto.produto)
  imgProduto: ImgProduto[];

  @OneToMany(() => Item, item => item.produto)
  item: Item[];

  @OneToMany(() => VoucherItem, voucherItem => voucherItem.produto)
  voucherItem : VoucherItem[];
}
