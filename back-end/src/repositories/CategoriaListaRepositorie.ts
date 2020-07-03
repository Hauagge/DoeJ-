import { EntityRepository, Repository } from 'typeorm';
import CategoriaLista from 'entities/CategoriaLista';

@EntityRepository(CategoriaLista)
class TransactionsRepository extends Repository<CategoriaLista> 
{
}
