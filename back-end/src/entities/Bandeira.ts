import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Bandeira')
export default class Bandeira {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  nome: string;
}
