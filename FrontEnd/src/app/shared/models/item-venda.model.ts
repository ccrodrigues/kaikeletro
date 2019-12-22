import { ProdutoModel } from './produto.model';
import { VendaModel } from './venda.model';

export class ItemVendaModel{

    id : number;
    produto : ProdutoModel;
    venda : VendaModel;
    quantidade : number;
}