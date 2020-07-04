import { EntityRepository, Repository } from 'typeorm';
import Cartao from '../entities/Cartao';
import User from '../entities/User';

interface IArrayCartao {
  arrayCartao: Array<Cartao>;
}

@EntityRepository(Cartao)
class TransactionsRepository extends Repository<Cartao> {
  public async createCartao(cartao: Cartao): Promise<void> {
    await this.create(cartao);
  }

  public async updateCartao(cartao: Cartao, newCartao: Cartao): Promise<void> {
    if (newCartao.descricao != null) cartao.descricao = newCartao.descricao;

    if (newCartao.numero != null) cartao.numero = newCartao.numero;

    if (newCartao.agencia != null) cartao.agencia = newCartao.agencia;

    if (newCartao.conta != null) cartao.conta = newCartao.conta;

    await this.save(cartao);
  }

  public async deleteCartao(cartao: Cartao): Promise<void> {
    await this.delete(cartao);
  }

  public async getAccCartoes(user: User): Promise<IArrayCartao> {
    const list: IArrayCartao = { arrayCartao: new Array<Cartao>() };
    list.arrayCartao = await this.find({ where: { user_ID: user.ID } });
    return list;
  }
}

export default TransactionsRepository;
