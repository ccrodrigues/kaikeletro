import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { Carrinho } from 'src/app/shared/models/carrinho.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  selectForm : FormGroup;
  // selectForm = new FormGroup({
  //   select: new FormControl()
  // });

  totalProdutos;
  valorTotal;
  valorProdutos = 0;
  frete = 10.99;
  selectedOption;

  // itensCarrinhos = [
  //   // { "idProduto": 1, "nome": "produto", "preco": 1000, "quantidade": 1, "img": "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg" },
  //   // { "idProduto": 2, "nome": "produto", "preco": 1000, "quantidade": 1, "img": "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg" }
  // ]

  // itemCarrinho = [];

  carrinho : Carrinho ;

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private ps: ProdutoService,
    private carrinhoService: CarrinhoService) { }


  ngOnInit() {
    this.selectForm = this.formBuilder.group(
      {
        select: ['', []]
      }
    );

    this.carrinho = this.carrinhoService.getCarrinho();

    this.calculoCarrinho();
  }
  
  removeItem(idProduto) {
    this.carrinho.items.splice(this.carrinho.items.findIndex(p => p.produto.idProduto == idProduto), 1);
    this.calculoCarrinho();

    if (this.carrinho.items.length <= 0) {
      alert("Seu carrinho está vazio");      
    }
  }

  calculoCarrinho() {
    this.totalProdutos = this.carrinho.items.length;
    //this.valorProdutos = this.carrinho.items.reduce((valorProdutos, valor) => valorProdutos + (valor.preco * valor.quantidade), 0)
    this.valorTotal = this.valorProdutos + this.frete
  }

  addQuantidade(value) {
    console.log(value)
  }

  // changeSuit(idProduto, quantidade, selectedOption) {

  //   for (let i = 0; i <= this.itens.length; i++) {
  //     if (this.itens[i].idProduto == idProduto) {
  //       this.itens[i].quantidade = selectedOption
  //       this.calculoCarrinho()
  //     }
  //   }

  //   console.log(this.selectedOption);
  // }

  private getImagemPrincipal(carrinho : Carrinho){

    

  }

}


