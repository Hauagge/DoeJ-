import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';
import User from './User';

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

  @ManyToOne(() => User, user => user.id)
  userGen_ID: User;
}
