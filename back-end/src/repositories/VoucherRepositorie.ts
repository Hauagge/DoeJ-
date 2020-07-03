import { EntityRepository, Repository } from 'typeorm';
import Voucher from 'entities/Voucher';




@EntityRepository(Voucher)
class TransactionsRepository extends Repository<Voucher> 
{


}
