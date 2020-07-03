import { EntityRepository, Repository } from 'typeorm';
import VoucherProduto from 'entities/VoucherProduto';
import Voucher from 'entities/Voucher';
import Produto from 'entities/Produto';

interface ArrayVoucherProduto
{
    arrayVoucherProduto:Array<VoucherProduto>;
}


@EntityRepository(VoucherProduto)
class TransactionsRepository extends Repository<VoucherProduto> 
{
    public async createVoucherProduto(voucherProduto :VoucherProduto):Promise<void>
    {
        await this.create(voucherProduto);
    }

    public async getVoucherProdutoByVoucher(voucher:Voucher):Promise<ArrayVoucherProduto>
    {
        var list:ArrayVoucherProduto = {arrayVoucherProduto:new Array<VoucherProduto>()}
        list.arrayVoucherProduto = await this.find({where:{voucher_ID:voucher.ID}});   
        return list; 
    }

    public async getVoucherProdutoByProduto(produto:Produto):Promise<ArrayVoucherProduto>
    {
        var list:ArrayVoucherProduto = {arrayVoucherProduto:new Array<VoucherProduto>()}
        list.arrayVoucherProduto = await this.find({where:{produto_ID:produto.ID}});   
        return list; 
    }
}
