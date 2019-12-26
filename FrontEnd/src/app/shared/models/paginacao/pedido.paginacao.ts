import { PedidoDto } from '../pedido.dto'

export class PedidoPaginacao{

    content: PedidoDto[];

    pageable: {

        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },

        offset: number,
        pageSize: number,
        pageNumber: number,
        paged: boolean,
        unpaged: boolean
    };
    totalPages: number;
    last: boolean;
    totalElements: number;
    size: number;
    number: number;
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}