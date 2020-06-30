import {Entity, ManyToOne, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import Produto from "./Produto";

@Entity('ImgProduto')
export default class ImgProduto 
{
    @PrimaryGeneratedColumn('uuid')
    ID:string;

    @Column()
    img: string;

    @Column()
    descricao: string;

    @ManyToOne(type => Produto, produto => produto.ID)
    produto_ID: Produto; 
}
