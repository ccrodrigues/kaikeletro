import { RefDto } from "./ref.dto";
import { PagamentoDto } from "./pagamento.dto";
import { ItemPedidoDto } from "./item-pedido.dto";

export interface PedidoDto {
    cliente: RefDto;
    enderecoDeEntrega: RefDto;
    pagamento: PagamentoDto;
    itens: ItemPedidoDto[];
}
