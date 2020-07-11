import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';


@EntityRepository(User)
class TransactionsRepository extends Repository<User> 
{ 
  
  public async setSaldo( Conta:User, Valor:number): Promise<void>
  {
    conta.saldo += Valor;
    await this.save(conta);

  }  

  //fazer uma controladora para ver se o documento realmente esta valido, tanto CPF quanto CNPJ
  public async setDocID(conta:User, newDocId:string): Promise<void>
  {
  }

  // fazer uma controladora para ver se o documento realmente esta valido, tanto CPF quanto CNPJ
  public async setDocID(conta: User, newDocId: string): Promise<void> {}

  public async updateUser(conta: User, novaConta: User): Promise<void> {
    if (novaConta.nome != null) conta.nome = novaConta.nome;

    if (novaConta.email != null) conta.email = novaConta.email;

    if (novaConta.telefoneOpc != null)
      conta.telefoneOpc = novaConta.telefoneOpc;

    if (novaConta.telefoneMov != null)
      conta.telefoneMov = novaConta.telefoneMov;

    if (novaConta.endereco != null) conta.endereco = novaConta.endereco;

    if (novaConta.foto != null) conta.foto = novaConta.foto;

    if (novaConta.nascimento != null) conta.nascimento = novaConta.nascimento;

    if (novaConta.fotoDoc_frente != null)
      conta.fotoDoc_frente = novaConta.fotoDoc_frente;

    if (novaConta.fotoDoc_verso != null)
      conta.fotoDoc_verso = novaConta.fotoDoc_verso;

    await this.save(conta);
  }
}

export default TransactionsRepository;
