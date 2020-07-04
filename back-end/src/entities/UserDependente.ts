import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('UserDependente')
export default class UserDependente {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @ManyToOne(() => User, user => user.id)
  user_ID: User;

  @ManyToOne(() => User, user => user.id)
  dependente_ID: User;
}
