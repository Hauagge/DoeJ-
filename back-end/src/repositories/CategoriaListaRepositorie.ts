import { EntityRepository, Repository } from 'typeorm';
import CategoriaLista from 'entities/CategoriaLista';

interface ArrayCatLista
{
    arrayCatList:Array<CategoriaLista>;
}


@EntityRepository(CategoriaLista)
class TransactionsRepository extends Repository<CategoriaLista> 
{

    public async createCategoriaLista(categoriaLista:CategoriaLista):Promise<void>
    {
        await this.create(categoriaLista);
    }

    public async deleteCategoriaLista(categoriaLista:CategoriaLista):Promise<void>
    {
        await this.delete(categoriaLista);
    }

    public async updateCategoriaLista(categoriaLista:CategoriaLista, newCategoriaLista:CategoriaLista):Promise<void>
    {
        if(newCategoriaLista.descricao !=null)
        categoriaLista.descricao = newCategoriaLista.descricao;

        if(newCategoriaLista.icon !=null)
        categoriaLista.icon = newCategoriaLista.icon;

        await this.save(categoriaLista);        
    }

    public async getCategoriaLista():Promise<ArrayCatLista>
    {
        var list:ArrayCatLista = {arrayCatList: new Array<CategoriaLista>()};
        list.arrayCatList = await this.find();
        return list;
    }

}
