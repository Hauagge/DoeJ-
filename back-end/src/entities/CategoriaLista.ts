import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class CategoriaLista
{   
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column()
    descricao: string;

    @Column()
    icon: Blob;
}
