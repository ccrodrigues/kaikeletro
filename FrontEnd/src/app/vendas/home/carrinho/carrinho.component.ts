import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { CarrinhoService } from 'src/app/shared/Services/carrinho.service';

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
    private ps: ProdutosService, private carrinhoService : CarrinhoService) { }


  ngOnInit() {
  
    this.calculoCarrinho()
    }

    removeItem(idProduto){
      this.itensCarrinhos.splice(this.itensCarrinhos.findIndex(p=>p.idProduto==idProduto),1);
      this.calculoCarrinho();

      if(this.itensCarrinhos.length<=0){
        alert("Seu carrinho está vazio");
        this.router.navigate(['']);
      }
    }

    calculoCarrinho(){
      this.totalProdutos = this.itensCarrinhos.length;
      this.valorProdutos =this.itensCarrinhos.reduce((valorProdutos, valor) => valorProdutos + (valor.preco*valor.quantidade), 0)
      this.valorTotal = this.valorProdutos + this.frete

    }

    changeSuit(idProduto,quantidade,selectedOption) {

      for(let i=0; i<=this.itensCarrinhos.length;i++){
        if (this.itensCarrinhos[i].idProduto == idProduto){
          this.itensCarrinhos[i].quantidade = selectedOption
          this.calculoCarrinho()
        }
      }
      console.log(this.selectedOption ) ;
    }

    fecha(){
      this.carrinhoService.fecharVenda().subscribe(
        (data)=>{
        data = data
        }
      );
    }
  }



