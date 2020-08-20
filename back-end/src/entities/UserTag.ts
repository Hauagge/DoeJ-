import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';
import Tag from './Tag';

@Entity('UserTag')
export default class UserTag {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @ManyToOne(() => User, user => user.userTag)
  user: User;

  @ManyToOne(() => Tag, tag => tag.userTag)
  tag: Tag;
}
