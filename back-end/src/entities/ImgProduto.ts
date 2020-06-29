import {Entity, ManyToOne, Column} from "typeorm";
import Produto from "./Produto";

@Entity()
export default class ImgProduto 
{
    @Column()
    img: Blob;

    @Column()
    descricao: string;

    @ManyToOne(type => Produto, produto => produto.ID)
    produto_ID: Produto; 
}
