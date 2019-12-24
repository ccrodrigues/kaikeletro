
import { ImagenModel } from './imagen.model';

export class ProdutoDtoModel{
    idProduto:number;
    nome:string;
    preco:number;
    imagens:Array<ImagenModel>;
}
