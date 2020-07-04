import { EntityRepository, Repository } from 'typeorm';
import UserTag from 'entities/UserTag';
import User from 'entities/User';
import Tag from 'entities/Tag';

interface ArrayUserTag
{
    arrayUserTag: Array<UserTag>;
}


@EntityRepository(UserTag)
class TransactionsRepository extends Repository<UserTag> 
{
    public async createUserTag(userTag:UserTag): Promise<void>
    {
        await this.create(userTag);
    }

    public async deleteUserTag(userTag: UserTag): Promise<void>
    {
        await this.delete(userTag);
    }

    
    public async getUserTagByUser(user:User): Promise<ArrayUserTag>
    {
        var list:ArrayUserTag = {arrayUserTag:new Array<UserTag>()};
        list.arrayUserTag = await this.find({where:{user_ID:user.ID}});
        return list;       
    }

    
    public async getUserTagByTag(tag:Tag): Promise<ArrayUserTag>
    {
        var list:ArrayUserTag = {arrayUserTag:new Array<UserTag>()};
        list.arrayUserTag = await this.find({where:{tag_ID:tag.ID}});
        return list;       
    }

}