import { EntityRepository, Repository } from 'typeorm';
import Tag from '../entities/Tag';

@EntityRepository(Tag)
class TransactionsRepository extends Repository<Tag> 
{
    
}
