import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemVendaModel } from '../models/item-venda.model';
import { VendasModel } from '../models/vendas.model';
import { ProdutoModel } from '../models/produto.model';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/env.service';
import { Usuario } from '../models/usuario.model';

@Injectable({
    providedIn: 'root'
  })
  export class CarrinhoService {
  
    constructor(private router : Router,private http : HttpClient, private envService:EnvService) { }

   private url : string = "http://localhost:8080/";

   public itensCarrinho : ItemVendaModel[] = []

   public venda : VendasModel = new VendasModel();

   public user : Usuario = new Usuario();


   valorTotal:number;
   frete:number = 20;

   public exibirItens(): ItemVendaModel[]{
     return this.itensCarrinho
   }


  public addProduto(produ : ProdutoModel = new ProdutoModel() ){
    let item : ItemVendaModel = new ItemVendaModel() 
       item.produto = produ
       item.quantidade = 1
       this.itensCarrinho.push(item)  
       console.log(item)
   }


  public alterarQuantidade( selectedOption, id):void{
    
    let num = parseInt(selectedOption)
    
    let find = this.itensCarrinho.find((item : ItemVendaModel) => item.produto.idProduto === id)
       
    if(find){  
      find.quantidade = num
       } 
        console.log(this.itensCarrinho)
        console.log(selectedOption)
        console.log(id)
      
      }

  
   removeItem(idProduto){
    this.itensCarrinho.splice(this.itensCarrinho.findIndex(p=>p.produto.idProduto==idProduto),1);
  }

  calculoCarrinho(){
    let totalValor = 0
    totalValor =this.itensCarrinho.reduce((valorProdutos, item) => valorProdutos + (item.produto.preco*item.quantidade), 0)
    return  totalValor
  }

  valorTotalFrete(){
    let totalFrete = 0;
    return totalFrete = this.calculoCarrinho() + this.frete;
  }

  totalItensCarrinho(){
      let total = 0
      this.itensCarrinho.map(function(item){
          total = total + (item.quantidade);
      });
      return total;
  }

  verifyItemExists(produ : ProdutoModel = new ProdutoModel()){
    let find = this.itensCarrinho.find((item : ItemVendaModel) => item.produto.idProduto === produ.idProduto)
       
    if(find){
        find.quantidade += 1;
    }else{
      this.addProduto(produ)
    } 
    }

    totalizarVenda(){
       // this.venda.usuario = this.user;
        this.venda.pagamento = "Aguardando";
        this.venda.status = "Aberta";
        this.venda.totalItens = this.totalItensCarrinho();
        this.venda.valor = this.valorTotalFrete()
    }


    fecharVenda(){
        this.totalizarVenda();
        this.venda.item = this.itensCarrinho
        console.log("Venda: " + this.itensCarrinho)
    }   
  }
  