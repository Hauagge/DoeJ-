import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './User';
import CategoriaLista from './CategoriaLista';

@Entity('Lista')
export default class Lista {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  descricao: string;

  @Column()
  dateCreate: Date;

  @Column()
  dateDonate: Date;

  @Column()
  userDonator_ID: string;

  @ManyToOne(() => CategoriaLista, categoriaLista => categoriaLista.ID)
  categoriaLista_ID: CategoriaLista;

  @ManyToOne(() => User, user => user.id)
  userOwner_ID: User;
}
