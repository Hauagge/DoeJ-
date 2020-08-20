import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
// import Identificador from './Identificador';
import User from './User';

@Entity('carteira')
export default class Carteira {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: 'income' | 'outcome';

  @Column()
  value: number;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => User)
  @JoinColumn()
  User: User;

  @UpdateDateColumn()
  updated_at: Date;
}
