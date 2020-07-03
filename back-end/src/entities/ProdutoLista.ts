import {Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import Produto from "./Produto";
import Lista from "./Lista";

@Entity()
export class ProdutoLista 
{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @ManyToOne(type => Produto, produto => produto.ID)
    produto_ID: Produto;
    
    @ManyToOne(type => Lista, lista => lista.ID)
    lista_ID: Lista;
}
