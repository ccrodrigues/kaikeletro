import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinhos = [];

  produtos = [
    {"nome" : "produto",  "preco" : 1000.00, "quantidade" : "2", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"nome" : "produto",  "preco" : 1000.00, "quantidade" : "2", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"nome" : "produto",  "preco" : 1000.00, "quantidade" : "2", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"nome" : "produto",  "preco" : 1000.00, "quantidade" : "2", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"nome" : "produto",  "preco" : 1000.00, "quantidade" : "2", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
