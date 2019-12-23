import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemVendaModel } from '../models/item-venda.model';
import { VendasModel } from '../models/vendas.model';
import { ProdutoModel } from '../models/produto.model';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/env.service';

@Injectable({
    providedIn: 'root'
  })
  export class CarrinhoService {
  
    constructor(private router : Router,private http : HttpClient, private envService:EnvService) { }

    private url : string = "http://localhost:8080/vendas/";

   public itensCarrinho : ItemVendaModel[];

   public venda : VendasModel

   valorTotal:number;
   frete:number;

   addProduto(item : ItemVendaModel){
       this.itensCarrinho.push(item)
   }
  
   removeItem(idProduto){
    this.itensCarrinho.splice(this.itensCarrinho.findIndex(p=>p.produto.idProduto==idProduto),1);
    this.calculoCarrinho();

    if(this.itensCarrinho.length<=0){
      alert("Seu carrinho está vazio");
      this.router.navigate(['']);
    }
  }

  calculoCarrinho(){
    this.venda.totalItens = this.itensCarrinho.length;
    this.venda.totalVendas =this.itensCarrinho.reduce((valorProdutos, valor) => valorProdutos + (valor.produto.preco*valor.quantidade), 0)
    this.valorTotal =  this.venda.totalVendas + this.frete

  }

  totalCarrinho(){
      let total = 0
      this.itensCarrinho.map(function(item){
          total = total + (item.produto.preco*item.quantidade);
      });
      return total;
  }

  verifyItemExists(itemCarrinho:ItemVendaModel){
    let find = this.itensCarrinho.find(function(item){
        item.produto.idProduto=== itemCarrinho.produto.idProduto
    })

    if(find){
        find.quantidade += 1;
    }else{
        this.itensCarrinho.push(itemCarrinho)
    } 
    }


    getAll() {
      return this.http.get(this.url);
    }

    totalizarVenda(){
    }

    fecharVenda(){
        this.venda.itens = this.itensCarrinho
    

        return this.http.post<VendasModel>(this.envService.urlAPI+ "vendas",this.venda);
    }
       
  }
  