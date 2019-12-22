
import { ImagemModel } from './imagem.model';

export class ProdutoDto{
    idProduto:number;
    nome:string;
    preco:number;
    imagens:Array<ImagemModel>;
}
