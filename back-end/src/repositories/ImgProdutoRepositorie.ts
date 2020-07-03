import { EntityRepository, Repository } from 'typeorm';
import ImgProduto from '../entities/ImgProduto';
import Produto from '../entities/Produto';

interface ArrayImgProduto
{
    arrayImgProduto: Array<ImgProduto>;
}


@EntityRepository(ImgProduto)
class TransactionsRepository extends Repository<ImgProduto> 
{
    public async createImgProduto(imgProduto: ImgProduto): Promise<void>
    {
        await this.save(imgProduto);
    }

    public async deleteImgProduto(imgProduto: ImgProduto): Promise<void>
    {
        await this.delete(imgProduto);
    }

    public async updateImgProduto(imgProduto : ImgProduto, newImgProduto: ImgProduto):Promise<void>
    {
        if(newImgProduto.descricao != null)
            imgProduto.descricao = newImgProduto.descricao;
        if(newImgProduto.img != null)
            imgProduto.img = newImgProduto.img;
        
        await this.save(imgProduto);     
    }

    public async getImgProduto(produto:Produto): Promise<ArrayImgProduto>
    {
        var list:ArrayImgProduto = {arrayImgProduto:new Array<ImgProduto>()};
        list.arrayImgProduto = await this.find({where:{produto_ID:produto.ID}});
        return list;       
    }


}    