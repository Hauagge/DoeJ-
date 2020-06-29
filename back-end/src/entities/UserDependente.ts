import {Entity, ManyToOne} from "typeorm";
import User from "./User";



@Entity('UserDependente')
export class UserDependente 
{
    @ManyToOne(type => User, user => user.ID)
    user_ID: User;

    @ManyToOne(type => User, user => user.ID)
    dependente_ID: User;
}
