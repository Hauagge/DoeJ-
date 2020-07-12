import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import User from './User';
import Historico from './Historico';
import VoucherItem from './VoucherItem';

@Entity('Voucher')
export default class Voucher {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  codigo: string;

  @CreateDateColumn()
  dataCreate: Date;

  @Column()
  dataExpired: Date;

  @Column()
  descricao: string;

  @ManyToOne(() => User, user => user.ID)
  userGen_ID: User;

  @ManyToOne(() => User, user => user.ID)
  userOwn_ID: User;

  @OneToMany(() => Historico, historico => historico.voucher)
  historico: Historico[];

  @OneToMany(() => VoucherProduto, historico => historico.voucher)
 
}
