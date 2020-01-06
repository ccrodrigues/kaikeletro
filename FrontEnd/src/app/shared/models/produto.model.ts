import { CategoriaModel } from './categoria.model';
import { ImagenModel } from './imagen.model';


export class ProdutoModel{
    idProduto:number;
    nome:string;
    preco:number;
    descricao:string;
    categorias:Array<any>;
    imagens:Array<any>;

}
