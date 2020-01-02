import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]
})
export class ProdutosDetalhesComponent implements OnInit {

  produto:ProdutoModel = new ProdutoModel();

  numerosParcela= [1,2,3,4,5,6,7,8,9,10,11,12];
  numeroParcelaAtual=1; 
  imagemAtual ;
  Preco:number;
  Parcela;
  idRota;


   constructor(
    private produtoService:ProdutosService,  
    private activateRoute : ActivatedRoute,
    private carrinhoService : CarrinhoService, 
    private dialogService   : DialogService) { 
     
  }

   ngOnInit() {

    this.activateRoute.params.subscribe((data)=>{this.idRota = data.id;
      console.log("Id da rota: " + this.idRota); 
    });

    this.produtoService.getById(this.idRota).subscribe(  data =>{
      this.produto=data;
      this.Preco=data.preco; 
      this.Parcela=data.preco
      this.imagemAtual=this.produto.imagens[0].imagemProduto;
    });
    console.log(this.produto)
   
  }
  trocarImagem(img) {
    this.imagemAtual = img;
  }

  mudarParcela(numero){
    this.numeroParcelaAtual=numero;
    this.Parcela=((this.Preco)/this.numeroParcelaAtual).toFixed(2);
  }

  adcionarCarrinho(){

    this.carrinhoService.verifyItemExists(this.produto);
    console.log("Adicionando " +  this.produto);
    this.dialogService.showSuccess("Produto adicionado no carrinho com sucesso!"); 

 }

}
