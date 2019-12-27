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

  
  constructor(private router : Router, private formBuilder : FormBuilder,
    private ps: ProdutosService, private carrinhoService : CarrinhoService, private vendasService : VendaService) { }


  ngOnInit() {
    console.log("Itens: " + this.carrinhoService.exibirItens())
    }


    changeSuit(selectedOption : number, id) : void {

      this.carrinhoService.alterarQuantidade(selectedOption,id)
      //console.log(typeof(selectedOption)) 
    }
    
    finalizarVenda(){
      this.carrinhoService.fecharVenda();
      this.vendasService.fecharVenda(this.carrinhoService.venda).subscribe(
        (data)=>{
          data = data
          console.log(data)
          console.log(this.carrinhoService.itensCarrinho)
          while(this.carrinhoService.itensCarrinho.length) {
            this.carrinhoService.itensCarrinho.pop();
         }
          }
      )
    }
    
  }



