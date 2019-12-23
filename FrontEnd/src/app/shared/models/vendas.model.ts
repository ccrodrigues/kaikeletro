import { Usuario } from './usuario.model';
import { ItemVendaModel } from './item-venda.model';





export class VendasModel{
    id:number;
    valor:number;
    usuario: Usuario;
    statusVenda : string;
    statusPagamento : string;
    totalItens: number;
    totalVendas : number;
    itens:Array<ItemVendaModel>;

}
