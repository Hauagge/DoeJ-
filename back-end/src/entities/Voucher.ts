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

<<<<<<< HEAD
  @ManyToOne(() => User, user => user.id)
  userGen_ID: User;
=======
    @ManyToOne(type => User, user => user.ID)
    userGen_ID: User;

    @ManyToOne(type => User, user => user.ID)
    userOwn_ID: User;
>>>>>>> 38ea76e7310432f878ce50e72565ccd0517a9d43
}
