import { Usuario } from './usuario.model';
import { ItemVendaModel } from './item-venda.model';





export class VendasModel{
    id:number;
    usuario: Usuario;
    statusVenda : string;
    statusPagamento : string;
    totalItens: number;
    valor : number;
    itens:Array<ItemVendaModel>;

}
