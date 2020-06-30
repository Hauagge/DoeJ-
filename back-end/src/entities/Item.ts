import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Lista from "./Lista";
import Produto from "./Produto";

@Entity('Item')
export default class Item
{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @ManyToOne(type => Produto, produto => produto.ID)
    produto_ID: Produto;

    @ManyToOne(type => Lista, lista => lista.ID)
    lista_ID: Lista;

    @Column()
    quantidade: number;

    @Column()
    desconto: number;

}
