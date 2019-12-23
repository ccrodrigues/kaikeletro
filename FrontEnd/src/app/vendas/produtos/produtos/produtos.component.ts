import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoPaginacao } from 'src/app/shared/models/paginacao/produto.paginacao';
import { Router } from '@angular/router';
import { ProdutoDto } from 'src/app/shared/models/produto.dto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtosPaginacao : ProdutoPaginacao ;

  constructor(private produtoService : ProdutoService,
    private router : Router) { }

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

  mostrarProdutoDetalhes(produto : ProdutoDto){
    this.router.navigate(['produtos-detalhes', produto.idProduto]);
  }

  private getImagemPrincipalProdutos(produtosPaginacao : ProdutoPaginacao) : ProdutoPaginacao{

    produtosPaginacao.content.forEach((element, index) => {

      //a primeira imagem é a imagem principal do produto
      element.imagemPrincipal = element.imagens[0];
    });

    return produtosPaginacao;
  }

}
