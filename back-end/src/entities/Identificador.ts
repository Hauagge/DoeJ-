import {Entity, PrimaryColumn, Column, ManyToOne} from "typeorm";


@Entity('Identificador')
export default class Identificador 
{
    @PrimaryColumn()
    ID: number;

    @Column()
    nome: string;
}
