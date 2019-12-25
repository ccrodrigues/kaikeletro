import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { CarrinhoService } from 'src/app/shared/Services/carrinho.service';
import { VendaService } from 'src/app/shared/Services/venda.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  

  selectForm = new FormGroup({
    select: new FormControl()
 });
 
  totalProdutos;
  valorTotal;
  valorProdutos;
  frete = 10.99; 
  selectedOption;

  

  itensCarrinhos = [
    {"idProduto": 1, "nome" : "produto",  "preco" : 1000, "quantidade" : 1, "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"idProduto": 2,"nome" : "produto",  "preco"  : 1000, "quantidade" : 1, "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"idProduto": 3,"nome" : "produto",  "preco"  : 1000, "quantidade" : 1, "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"idProduto": 4,"nome" : "produto",  "preco"  : 1000, "quantidade" : 1, "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
    {"idProduto": 4,"nome" : "produto",  "preco"  : 1000, "quantidade" : 1, "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
  ]

  itemCarrinho = []

  itens = [
    {"idProduto": 1, "quantidade": 1 }
  ]

  constructor(private router : Router, private formBuilder : FormBuilder,
    private ps: ProdutosService, private carrinhoService : CarrinhoService, private vendasService : VendaService) { }


  ngOnInit() {
    console.log("Itens: " + this.carrinhoService.exibirItens())
    }


    changeSuit(selectedOption : number, id) : void {

      this.carrinhoService.alterarQuantidade(selectedOption,id)
      //console.log(typeof(selectedOption)) 
    }

    
    fecha(){
      this.carrinhoService.fecharVenda();
      this.vendasService.fecharVenda(this.carrinhoService.venda).subscribe(
        (data)=>{
          data = data
          console.log(data)
          console.log(this.carrinhoService.itensCarrinho)
          }
      )
    }
  }



