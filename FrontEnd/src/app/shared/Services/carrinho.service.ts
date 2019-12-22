import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Carrinho } from '../models/carrinho.model';
import { ProdutoDto } from '../models/produto.dto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(public storage: StorageService) {
  }

  criarOuLimparCarrinho() : Carrinho {
      let carrinho: Carrinho = { items: [] };
      this.storage.setCarrinho(carrinho);
      return carrinho;
  }

  getCarrinho() : Carrinho {
      let cart: Carrinho = this.storage.getCarrinho();
      if (cart == null) {
          cart = this.criarOuLimparCarrinho();
      }
      return cart;
  }

  adicionarProduto(produto: ProdutoDto) : Carrinho {
      let carrinho = this.getCarrinho();
      let posicao = carrinho.items.findIndex(x => x.produto.idProduto == produto.idProduto);
      if (posicao == -1) {
        carrinho.items.push({quantidade: 1, produto: produto});
      }
      this.storage.setCarrinho(carrinho);
      return carrinho;
  }

  removerProduto(produto: ProdutoDto) : Carrinho {
      let carrinho = this.getCarrinho();
      let position = carrinho.items.findIndex(x => x.produto.idProduto == produto.idProduto);
      if (position != -1) {
        carrinho.items.splice(position, 1);
      }
      this.storage.setCarrinho(carrinho);
      return carrinho;
  }

  aumentarQuantidade(produto: ProdutoDto) : Carrinho {
      let cart = this.getCarrinho();
      let position = cart.items.findIndex(x => x.produto.idProduto == produto.idProduto);
      if (position != -1) {
          cart.items[position].quantidade++;
      }
      this.storage.setCarrinho(cart);
      return cart;
  }

  diminuir(produto: ProdutoDto) : Carrinho {
      let cart = this.getCarrinho();
      let position = cart.items.findIndex(x => x.produto.idProduto == produto.idProduto);
      if (position != -1) {
          cart.items[position].quantidade--;
          if (cart.items[position].quantidade < 1) {
              cart = this.removerProduto(produto);
          }
      }
      this.storage.setCarrinho(cart);
      return cart;
  }

  total() : number {
      let cart = this.getCarrinho();
      let sum = 0;
      for (var i=0; i<cart.items.length; i++) {
          sum += cart.items[i].produto.preco * cart.items[i].quantidade;
      }
      return sum;
  }
}
