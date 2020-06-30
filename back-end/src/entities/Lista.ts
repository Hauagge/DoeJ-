import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import User from "./User";
import CategoriaLista from "./CategoriaLista";

@Entity('Lista')
export default class Lista 
{
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

    @ManyToOne(type => CategoriaLista, categoriaLista => categoriaLista.ID)
    categoriaLista_ID: CategoriaLista;

    @ManyToOne(type => User, user => user.ID)
    userOwner_ID: User;
}
