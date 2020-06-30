import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Produto from "./Produto";
import Voucher from "./Voucher";

@Entity('VoucherProduto')
export default class VoucherProduto 
{
    @PrimaryGeneratedColumn('uuid')
    ID:string;
    @ManyToOne(type => Voucher, voucher => voucher.ID)
    voucher_ID: Voucher;
    @ManyToOne(type => Produto, produto => produto.ID)
    produto_ID: Produto;
}
