import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from './User';
import Voucher from './Voucher';

@Entity('Historico')
export default class Historico {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  descricao: string;

  data: Date;

  @ManyToOne(() => Voucher, voucher => voucher.historico)
  voucher: Voucher;

  @ManyToOne(() => User, user => user.historico)
  user: User;
}
