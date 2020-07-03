import { EntityRepository, Repository } from 'typeorm';
import Voucher from 'entities/Voucher';
import User from 'entities/User';

interface ArrayVoucher
{
    arrayVoucher: Array<Voucher>;
}



@EntityRepository(Voucher)
class TransactionsRepository extends Repository<Voucher> 
{
    public async createVoucher(voucher : Voucher):Promise<void>
    {
        await this.create(voucher);
    }

    public async deleteVoucher(voucher: Voucher):Promise<void>
    {
        await this.delete(voucher);
    }

    //o metodo update não se pareceu necessário até o momento
    
    
    public async getVoucherByUserGen(user:User):Promise<ArrayVoucher>
    {
        var list:ArrayVoucher = {arrayVoucher:new Array<Voucher>()};
        list.arrayVoucher = await this.find({where:{userGen_ID:user.ID}});
        return list
    }

    public async getVoucherByUserOwn(user:User):Promise<ArrayVoucher>
    {
        var list:ArrayVoucher = {arrayVoucher:new Array<Voucher>()};
        list.arrayVoucher = await this.find({where:{userGen_ID:user.ID}});
        return list
    }


}
