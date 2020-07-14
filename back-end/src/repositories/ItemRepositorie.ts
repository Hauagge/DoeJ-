import { EntityRepository, Repository } from 'typeorm';
import Item from 'entities/Item';
import Lista from 'entities/Lista';

interface ArrayItem
{
    arrayItem : Array<Item>;
}

@EntityRepository(Item)
class TransactionsRepository extends Repository<Item> 
{
    public async createItem(item:Item):Promise<void>
    {
        await this.create(item);
    }

    public async deleteItem(item:Item):Promise<void>
    {
        await this.delete(item);
    }

    public async updateItem(item:Item, newItem:Item):Promise<void>
    {
        if(newItem.quantidade != null)
        item.quantidade = newItem.quantidade;

        if(newItem.desconto != null)
        item.desconto = newItem.desconto;

        await this.save(item);
    }

    public async getItemByLista(lista:Lista):Promise<ArrayItem>
    {
        var list:ArrayItem = {arrayItem: new Array<Item>()};
        list.arrayItem = await this.find({where:{lista:lista.ID}});
        return list;
    }
    



}
