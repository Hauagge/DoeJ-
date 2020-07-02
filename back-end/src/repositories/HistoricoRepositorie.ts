import { EntityRepository, Repository } from 'typeorm';
import Historico from '../entities/Historico';
import User from '../entities/User';


interface ArrayHistorico {
    arrayHistorico: Array<Historico>;
}


@EntityRepository(Historico)
class TransactionsRepository extends Repository<Historico> 
{
    public async createHistorico(historico: Historico): Promise<void>
    {
        await this.save(historico);
    }

    public async deleteHistorico(historico: Historico): Promise<void>
    {
        await this.delete(historico);
    }

    public async getHistorico(user: User): Promise<ArrayHistorico>
    {
        var list:ArrayHistorico = {arrayHistorico:new Array<Historico>()};
        list.arrayHistorico = await this.find({where: {user_ID:user.ID}})
        return list;
    }
}