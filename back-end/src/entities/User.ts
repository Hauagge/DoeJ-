import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Cartao from './Cartao';
import Historico from './Historico';
import UserDependente from './UserDependente';
import UserTag from './UserTag';
import Produto from './Produto';
import Lista from './Lista';
// import Identificador from './Identificador';

@Entity('User')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  nome: string;

  @Column()
  docID: string;

  @Column()
  email: string;

  @Column()
  telefoneOpc: string;


  @Column()
  telefoneMov: string;

  @Column()
  endereco: string;

  @Column()
  foto: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  createDate: Date;

  @Column()
  saldo: number;

  @Column()
  fotoDoc_frente: string;

  @Column()
  fotoDoc_verso: string;

  @Column()
  identifier_ID: number;

  @UpdateDateColumn()
  updateDate: Date;

  @Column({ type: 'date' })
  nascimento: Date;

  @OneToMany(() => Cartao, cartao => cartao.user)
  cartao: Cartao[];

  @OneToMany(() => Historico, historico => historico.user)
  historico: Historico[];

  @OneToMany(() => UserDependente, userDependente => userDependente.dependente)
  userDependenteDEPENDENTE : UserDependente[];

  @OneToMany(() => UserDependente, userDependente => userDependente.user)
  userDependenteUSER : UserDependente[];

  @OneToMany(() => UserTag, userTag => userTag.user)
  userTag : UserTag[];

  @OneToMany(() => Produto, produto => produto.user)
  produto :Produto[];

  @OneToMany(() => Lista, lista => lista.userOwner)
  userOwnerLista: Lista[];

}
