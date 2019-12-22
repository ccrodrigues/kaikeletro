import { Usuario } from './usuario.model';
import { ItemVendaModel } from './item-venda.model';





export class VendaModel{
    id:number;
    valor:number;
    usuario: Usuario;
    dataVenda : Date;
    status : string;
    totalItens: number;
    totalVendas : number;
    itens:Array<ItemVendaModel>;

}
