import { EntityRepository, Repository } from 'typeorm';
import Marca from '../entities/Marca';

interface ArrayMarca
{
    arrayMarca: Array<Marca>;
}


@EntityRepository(Marca)
class TransactionsRepository extends Repository<Marca> 
{
    public async createMarca(marca:Marca): Promise<void>
    {
        await this.save(marca);
    }

    public async deleteMarca(marca:Marca): Promise<void>
    {
        await this.delete(marca);
    }

    public async getMarca(): Promise<ArrayMarca> 
    {
        var list:ArrayMarca = {arrayMarca: new Array<Marca>()};
        list.arrayMarca = await this.find();
        return list;
    }

}   