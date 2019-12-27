import { ProdutoDtoModel } from './produto-dto.model';

export interface CarrinhoItem {
    quantidade: number,
    produto: ProdutoDtoModel
}