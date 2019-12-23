import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutoDto } from 'src/app/shared/models/produto.dto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]
})
export class ProdutosDetalhesComponent implements OnInit {

  produto : ProdutoDto ;

  numerosParcela= [1,2,3,4,5,6,7,8,9,10,11,12];
  numeroParcelaAtual=1; 
  imagemAtual = "https://picsum.photos/id/237/200/300";
  preco: number;
  parcela : any;


   constructor(
     private activatedRoute : ActivatedRoute,
     private produtoService : ProdutoService,
     private carrinhoService : CarrinhoService 
    ) { 
     
  }

   ngOnInit() {

    this.activatedRoute.params.subscribe(
      (rota) => {
        this.produtoService.getById(rota.id).subscribe(  
          data =>{
            this.produto=data;
            this.produto = this.getImagemPrincipalProduto(this.produto);
            this.imagemAtual = this.produto.imagemPrincipal.imagemProduto;
            console.log(this.imagemAtual);
            console.log(this.produto);
          }
        );
        
      }
    );   
  }

  
  private getImagemPrincipalProduto(produtoDto : ProdutoDto) : ProdutoDto{

    produtoDto.imagemPrincipal = produtoDto.imagens[0];

    return produtoDto;
  }

  trocarImagem(img) {
    this.imagemAtual = img;
  }

  mudarParcela(numero){
    this.numeroParcelaAtual=numero;
    this.parcela =( (this.preco) /this.numeroParcelaAtual).toPrecision(2) ;
  }

  adicionarCarrinho(produto){
    console.log(produto);
    this.carrinhoService.adicionarProduto(produto);
    console.log(this.carrinhoService.getCarrinho())
    alert("por enquanto não está funcionando");
  }

}
