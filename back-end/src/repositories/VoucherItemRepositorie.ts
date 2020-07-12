import { EntityRepository, Repository } from 'typeorm';
import VoucherItem from 'entities/VoucherItem';
import Voucher from 'entities/Voucher';
import Item from 'entities/Item';

interface ArrayVoucherItem
{
    arrayVoucherItem:Array<VoucherItem>;
}


@EntityRepository(VoucherItem)
class TransactionsRepository extends Repository<VoucherItem> 
{
    public async createVoucherItem(voucherItem :VoucherItem):Promise<void>
    {
        await this.create(voucherItem);
    }

    public async deleteVoucherItem(voucherItem :VoucherItem):Promise<void>
    {
        await this.delete(voucherItem);
    }

    public async getVoucherItemByVoucher(voucher:Voucher):Promise<ArrayVoucherItem>
    {
        var list:ArrayVoucherItem = {arrayVoucherItem:new Array<VoucherItem>()}
        list.arrayVoucherItem = await this.find({where:{voucher_ID:voucher.ID}});   
        return list; 
    }

    public async getVoucherItemByItem(item:Item):Promise<ArrayVoucherItem>
    {
        var list:ArrayVoucherItem = {arrayVoucherItem:new Array<VoucherItem>()}
        list.arrayVoucherItem = await this.find({where:{item_ID:item.ID}});   
        return list; 
    }
}
