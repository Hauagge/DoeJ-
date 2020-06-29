import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Tag 
{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column()
    descricao: string;

    @Column()
    foto: Blob;
    
}
