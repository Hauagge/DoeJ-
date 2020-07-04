import { EntityRepository, Repository } from 'typeorm';
import Lista from '../entities/Lista';
import User from 'entities/User';

interface ArrayLista
{
    arrayLista: Array<Lista>;
}


@EntityRepository(Lista)
class TransactionsRepository extends Repository<Lista> 
{
    public async createLista(lista:Lista): Promise<void>
    {
        await this.create(lista);
    }

    public async deleteLista(lista: Lista): Promise<void>
    {
        await this.delete(lista);
    }

    public async updateLista(lista: Lista, newLista: Lista):Promise<void>
    {
        if(newLista.descricao != null)
        lista.descricao = newLista.descricao;

        if(newLista.categoriaLista_ID != null)
        lista.categoriaLista_ID = newLista.categoriaLista_ID;

        await this.save(lista);
    }

    public async getListaByOwner(user:User): Promise<ArrayLista>
    {
        var list:ArrayLista = {arrayLista: new Array<Lista>()};
        list.arrayLista = await this.find({where:{userOwner_ID: user.ID}});
        return list;
    }

    public async getListaByDonator(user:User): Promise<ArrayLista>
    {
        var list:ArrayLista = {arrayLista: new Array<Lista>()};
        list.arrayLista = await this.find({where:{userDonator_ID: user.ID}});
        return list;
    }
}
