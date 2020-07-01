import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

interface Balance {
  entrada: number;
  saida: number;
  total: number;
}

@EntityRepository(User)
class TransactionsRepository extends Repository<User> 
{

  
  
  public async setSaldo( Conta:User, Valor:number): Promise<void>
  {
    // const conta = await this.findOne(
    //     {
    //         where:{email}
    //     })

    Conta.saldo += Valor;
    this.save(Conta);     
  }  

  public async getBalance(): Promise<Balance>
  {
    const transactions = await this.find();

    const balance = transactions.reduce
    (
      (acc: Balance, usuario: User) => 
      {
        if (usuario.type === 'entrada') 
        {
          acc.entrada += Number(usuario.value);
        } else if (usuario.type === 'saida') 
        {
          acc.saida += Number(usuario.value);
        }
        acc.total = Number(acc.entrada - acc.saida);
        return acc;
      },
      {
        entrada: 0,
        saida: 0,
        total: 0,
      },
    );

    return balance;
  }
}

export default TransactionsRepository;