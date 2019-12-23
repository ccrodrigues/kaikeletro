import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutoDto } from 'src/app/shared/models/produto.dto';
import { ProdutoPaginacao } from 'src/app/shared/models/paginacao/produto.paginacao';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtosPaginacao : ProdutoPaginacao ;

  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutosPaginacao(0,6).subscribe(
      (dados)=>{
        this.produtosPaginacao = dados;
        this.produtosPaginacao = this.getImagemPrincipalProdutos(this.produtosPaginacao);
        console.log(this.produtosPaginacao);
      }
    );

  }
  adicionarCarrinho(){
    alert("por enquanto não está funcionando");
  }

  mostrarProdutoDetalhes(produto){
    alert("por enquanto não está funcionando");
  }

  private getImagemPrincipalProdutos(produtosPaginacao : ProdutoPaginacao) : ProdutoPaginacao{


    produtosPaginacao.content.forEach((element, index) => {
      console.log(`Current index: ${index}`);
      console.log(element);

      //a primeira imagem é a imagem principal do produto
      element.imagemPrincipal = element.imagens[0];

    });

    return produtosPaginacao;
  }

}
