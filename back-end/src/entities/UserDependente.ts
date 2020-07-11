import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('UserDependente')
export default class UserDependente {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @ManyToOne(() => User, user => user.ID)
  user_ID: User;

  @ManyToOne(() => User, user => user.ID)
  dependente_ID: User;
}
