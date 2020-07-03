import { EntityRepository, Repository } from 'typeorm';
import Lista from '../entities/Lista';

interface ArrayLista
{
    arrayLista: Array<Lista>
}


@EntityRepository(Lista)
class TransactionsRepository extends Repository<Lista> 
{
    public async createLista(lista:Lista): Promise<void>
    {
        await this.save(lista);
    }

    public async deleteLista(lista: Lista): Promise<void>
    {
        await this.delete(lista);
    }

    public async updateLista()
    {
        
    }


}
