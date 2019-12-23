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

    private url : string = "http://localhost:8080/";

   public itensCarrinho : ItemVendaModel[];

   public venda : VendasModel;

   public produto : ProdutoModel = new ProdutoModel();

   public item : ItemVendaModel;


   
   

   valorTotal:number;
   frete:number;

   addProd(){
      // this.produto.idProduto = 1;
      // this.produto.preco = 10.99;
      // this.item.produto = this.produto;
       this.item.quantidade = 2;
       this.itensCarrinho.push(this.item);
   }

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
    this.venda.valor =this.itensCarrinho.reduce((valorProdutos, valor) => valorProdutos + (valor.produto.preco*valor.quantidade), 0)
    this.valorTotal =  this.venda.valor + this.frete
  }

  totalCarrinho(){
      let total = 0
      this.itensCarrinho.map(function(item){
          total = total + (item.quantidade);
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

    totalizarVenda(){
        //this.venda.itens = this.itensCarrinho
        this.venda.statusPagamento = "Aguardando"
        this.venda.statusVenda = "Aberta"
        this.venda.totalItens = this.totalCarrinho()
        this.venda.valor = this.valorTotal  
    }


    fecharVenda(){
        this.addProd();
        this.totalizarVenda();
        for(let i; i<=this.itensCarrinho.length; i++){
            this.itensCarrinho[i].venda = this.venda
        }
        console.log("Venda: " + this.itensCarrinho)
        return this.http.post<any>(this.url + "itens", this.itensCarrinho);
    }
       
  }
  