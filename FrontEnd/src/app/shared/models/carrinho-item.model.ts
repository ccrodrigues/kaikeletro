import { ProdutoDto } from './produto.dto';

export interface CarrinhoItem {
    quantidade: number,
    produto: ProdutoDto
}