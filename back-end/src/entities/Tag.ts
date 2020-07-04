import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Tag')
export default class Tag {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  descricao: string;

  @Column()
  foto: string;
}
