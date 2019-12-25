
import { ImagemModel } from './imagem.model';

export class ProdutoDto{
    
    id:number;
    nome:string;
    preco:number;
    imagens:Array<ImagemModel>;
    
    imagemPrincipal : ImagemModel;
}
