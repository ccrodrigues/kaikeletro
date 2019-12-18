import { ProdutoModel } from './produto.model';

export class CategoriaModel{
    idCategoria:number;
    nome:string;
    produtos:Array<ProdutoModel>
}