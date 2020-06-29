import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import CREATEcategoriaLista1593307198848 from "@shared/Infra/typeorm/migrations/1593307198848-CREATEcategoriaLista";
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

    @ManyToOne(type => CategoriaLista, categoriaLista => categoriaLista.ID)
    categoriaLista_ID: CategoriaLista;

    @ManyToOne(type => User, user => user.ID)
    user_ID: User;
}
