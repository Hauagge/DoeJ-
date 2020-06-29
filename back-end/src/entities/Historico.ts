import {Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import User from "./User";
import Voucher from "./Voucher";


@Entity()
export default class Historico 
{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    descricao: string;

    data: Date;

    @ManyToOne(type => Voucher, voucher => voucher.ID)
    voucher_ID: Voucher;

    @ManyToOne(type => User, user => user.ID)
    user_ID: User;

}
