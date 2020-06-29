import {Entity, ManyToOne, Column} from "typeorm";
import Lista from "./Lista";
import User from "./User";


@Entity('Donator')
export default class Donator
{
    @ManyToOne(type => Lista, lista => lista.ID)
    lista_ID: string;
    
    @ManyToOne(type => User, user => user.ID)
    user_ID: string;

    @Column()
    data: Date;


}
