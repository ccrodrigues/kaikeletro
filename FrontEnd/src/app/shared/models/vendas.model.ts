import { Usuario } from './usuario.model';
import { ItemVendaModel } from './item-venda.model';





export class VendasModel{
    id:number;
    usuario: Usuario;
    status : string;
    pagamento : string;
    totalItens: number;
    valor : number;
    parcela : number;
    valorParcela : number;
    item:Array<ItemVendaModel>;

}
