import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Lista from './Lista';

@Entity('CategoriaLista')
export default class CategoriaLista {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  descricao: string;

  @Column()
  icon: string;

  @OneToMany(() => Lista, lista => lista.categoriaLista)
  lista: Lista;

}
