import { ProdutoModel } from './produto.model';
import { VendasModel } from './vendas.model';

export class ItemVendaModel{

    id : number;
    produto : ProdutoModel;
    venda : VendasModel;
    quantidade : number;
}