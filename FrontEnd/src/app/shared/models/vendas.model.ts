import { UsuarioModel } from './usuario.model';
import { ItemVendaModel } from './item-venda.model';

export class VendasModel{
    id:number;
    usuario: UsuarioModel;
    status : string;
    pagamento : string;
    totalItens: number;
    valor : number;
    parcela : number;
    valorParcela : number;
    item:Array<ItemVendaModel>;
    dataVenda : string;

}