import { EntityRepository, Repository } from 'typeorm';
import { ProdutoLista } from 'entities/ProdutoLista';
import Produto from 'entities/Produto';
import Lista from 'entities/Lista';

interface ArrayProdutoLista
{
    arrayProdutoLista: Array<ProdutoLista>;
}


@EntityRepository(ProdutoLista)
class TransactionsRepository extends Repository<ProdutoLista> 
{
    public async createProdutoLista(produtoLista:ProdutoLista):Promise<void>
    {
        await this.create(produtoLista);
    }

    public async deleteProdutoLista(produtoLista:ProdutoLista):Promise<void>
    {
        await this.delete(produtoLista);
    }

    public async getProdutoListaByProduto(produto:Produto):Promise<ArrayProdutoLista>
    {
        var list:ArrayProdutoLista = {arrayProdutoLista:new Array<ProdutoLista>()};
        list.arrayProdutoLista = await this.find({where:{produto_ID:produto.ID}});
        return list;
    }
    
    public async getProdutoListaByLista(lista:Lista):Promise<ArrayProdutoLista>
    {
        var list:ArrayProdutoLista = {arrayProdutoLista:new Array<ProdutoLista>()};
        list.arrayProdutoLista = await this.find({where:{lista_ID:lista.ID}});
        return list;
    }


}