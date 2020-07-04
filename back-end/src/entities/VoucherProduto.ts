import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Produto from './Produto';
import Voucher from './Voucher';

@Entity('VoucherProduto')
export default class VoucherProduto {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @ManyToOne(() => Voucher, voucher => voucher.ID)
  voucher_ID: Voucher;

  @ManyToOne(() => Produto, produto => produto.ID)
  produto_ID: Produto;
}
