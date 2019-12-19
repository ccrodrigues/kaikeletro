import { CategoriaModel } from './categoria.model';
import { ImagenModel } from './imagen.model';


export class ProdutoModel{
    idProduto:number;
    nome:string;
    preco:number;
    descricao:string;
    imagens:Array<ImagenModel>;
}