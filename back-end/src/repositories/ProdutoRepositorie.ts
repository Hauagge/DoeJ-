import { EntityRepository, Repository } from 'typeorm';
import Produto from '../entities/Produto';
import User from '../entities/User';
import Marca from '../entities/Marca';


interface ArrayProduto
{
    arrayProduto:Array<Produto>;
}


@EntityRepository(Produto)
class TransactionsRepository extends Repository<Produto> 
{
    public async createProduto(produto: Produto): Promise<void>
    {
        await this.create(produto); 
    }

    public async deleteProduto(produto: Produto): Promise<void>
    {
        await this.delete(produto);
    }

    public async updateProduto(produto: Produto, novoProduto: Produto)
    {
        if(novoProduto.descricao != null)
        produto.descricao = novoProduto.descricao;
        
        if(novoProduto.preco != null)
        produto.preco = novoProduto.preco;

        if(novoProduto.quantidade != null)
        produto.quantidade = novoProduto.quantidade;    

        if(novoProduto.marca != null)
        produto.marca = novoProduto.marca;

        await this.save(produto);
    }

    public async getProdutoByUser(user:User): Promise<ArrayProduto>
    {
        var list:ArrayProduto = {arrayProduto:new Array<Produto>()};
        list.arrayProduto = await this.find({where:{user_ID:user.ID}});
        return list;
    }

    public async getProdutoByMarca(marca:Marca)
    {
        var list:ArrayProduto = {arrayProduto:new Array<Produto>()};
        list.arrayProduto = await this.find({where:{marca_ID:marca.ID}});
        return list;
    }    
}