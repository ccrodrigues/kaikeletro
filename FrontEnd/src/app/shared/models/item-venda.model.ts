import { ProdutoModel } from './produto.model';
import { VendasModel } from './vendas.model';

export class ItemVendaModel{

constructor(
    
    ){}

    public  id : number
    public produto : ProdutoModel
    public venda : VendasModel
    public  quantidade : number
}