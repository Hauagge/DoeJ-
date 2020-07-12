import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('UserDependente')
export default class UserDependente {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @ManyToOne(() => User, user => user.userDependenteUSER)
  user: User;

  @ManyToOne(() => User, user => user.userDependenteDEPENDENTE)
  dependente: User;
}
