import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne} from "typeorm";
import Identificador from "./Identificador";

@Entity('User')
export default class User
{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column()
    docID: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    telefoneOpc: string;

    @Column()
    telefoneMov: string;

    @Column()
    endereco: string;

    @UpdateDateColumn()
    updateDate: Date;

    @Column()
    foto: Blob;

    @Column()
    login: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    createDate: Date;

    @Column()
    saldo: number;

    @Column()
    nascimento: Date;

    @Column()
    fotoDoc_frente: Blob;

    @Column()
    fotoDoc_verso: Blob;

    @ManyToOne(type => Identificador, identificador => identificador.ID)
    identifier_ID: Identificador;

}