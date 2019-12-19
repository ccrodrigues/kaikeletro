import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';

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
  imagemAtual ="";
  Preco:number;
  Parcela;


   constructor(private produtoService:ProdutosService) { 
     
  }

   ngOnInit() {
    this.produtoService.getById("81").subscribe(  data =>{
      this.produto=data;
      console.log(this.produto)
      this.Preco=data.preco; 
      this.Parcela=data.preco
      this.imagemAtual=data.imagens[0].imagemProduto;
      console.log(this.imagemAtual)
    });
  }
  trocarImagem(img) {
    this.imagemAtual = img;
  }

  mudarParcela(numero){
    this.numeroParcelaAtual=numero;
    this.Parcela=((this.Preco)/this.numeroParcelaAtual).toFixed(2);
  }

}
