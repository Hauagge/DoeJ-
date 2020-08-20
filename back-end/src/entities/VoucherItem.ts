import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Produto from './Produto';
import Voucher from './Voucher';

@Entity('VoucherItem')
export default class VoucherProduto {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @ManyToOne(() => Voucher, voucher => voucher.voucherItem)
  voucher: Voucher;

  @ManyToOne(() => Produto, produto => produto.voucherItem)
  produto: Produto;
}
