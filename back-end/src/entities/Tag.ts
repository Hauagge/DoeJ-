import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import UserTag from './UserTag';

@Entity('Tag')
export default class Tag {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  descricao: string;

  @Column()
  foto: string;

  @OneToMany(() => UserTag, userTag => userTag.tag)
  userTag: UserTag[];
}
