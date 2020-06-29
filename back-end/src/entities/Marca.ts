import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('Marca')
export default class Marca 
{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column()
    nome: string;
}
