import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import User from './User';
import CategoriaLista from './CategoriaLista';
import Item from './Item';

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

  @ManyToOne(() => CategoriaLista, categoriaLista => categoriaLista.lista)
  categoriaLista: CategoriaLista;

  @ManyToOne(() => User, user => user.userOwnerLista)
  userOwner: User;

  @OneToMany(() => Item, item => item.lista)
  item: Item[];
}
