import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoPaginacao } from 'src/app/shared/models/paginacao/produto.paginacao';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoDto } from 'src/app/shared/models/produto.dto';
import { Paginacao } from 'src/app/shared/models/paginacao/paginacao.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtosPaginacao : ProdutoPaginacao ;

  paginacao : Paginacao = {
    pagina : 0,
    linhasPorPagina : 3,
    totalPaginas : 0,
    totalElementos : 0
  };

  categoria = null;

  constructor(
    private activatedRoute : ActivatedRoute,
    private produtoService : ProdutoService,
    private router : Router) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      (queryParams => {
                
        if (queryParams.categoria){
          this.categoria = queryParams.categoria;
        }
        
        // this.produtoService.getProdutosPaginacao(0,6, this.categoria).subscribe(
        //   (dados)=>{
        //     this.produtosPaginacao = dados;
        //     this.produtosPaginacao = this.getImagemPrincipalProdutos(this.produtosPaginacao);
        //     this.setPaginacao(this.produtosPaginacao);
        //     console.log(this.produtosPaginacao);
        //   }
        // );

        this.paginacaoRequest();
      })
    );
    
  }
  adicionarCarrinho(){
    alert("por enquanto não está funcionando");
  }

  mostrarProdutoDetalhes(produto : ProdutoDto){
    this.router.navigate(['produtos-detalhes', produto.id]);
  }

  primeiraPagina(){
    this.paginacao.pagina = 0; console.log(this.paginacao);
    this.paginacaoRequest();

  }

  proximaPagina(){
    this.paginacao.pagina = this.paginacao.pagina + 1; console.log(this.paginacao);
    this.paginacaoRequest(); 
  }

  anteriorPagina(){

    this.paginacao.pagina = this.paginacao.pagina - 1; console.log(this.paginacao);

    if (this.paginacao.pagina < 0){
      this.paginacao.pagina = 0;
    }
    this.paginacaoRequest();
  }

  ultimaPagina(){
    this.paginacao.pagina = this.paginacao.totalPaginas - 1; console.log(this.paginacao);
    this.paginacaoRequest();
  }

  private getImagemPrincipalProdutos(produtosPaginacao : ProdutoPaginacao) : ProdutoPaginacao{

    produtosPaginacao.content.forEach((element, index) => {

      //a primeira imagem é a imagem principal do produto
      element.imagemPrincipal = element.imagens[0];
    });

    return produtosPaginacao;
  }

  private setPaginacao(produtosPaginacao : ProdutoPaginacao){
      this.paginacao.pagina = produtosPaginacao.number;
      this.paginacao.totalPaginas = produtosPaginacao.totalPages;
      this.paginacao.totalElementos = produtosPaginacao.totalElements;
      this.paginacao.linhasPorPagina = produtosPaginacao.size;
  }

  private paginacaoRequest(){

    this.produtoService.getProdutosPaginacao(this.paginacao.pagina, this.paginacao.linhasPorPagina , this.categoria).subscribe(
      (dados)=>{
        this.produtosPaginacao = dados;
        this.produtosPaginacao = this.getImagemPrincipalProdutos(this.produtosPaginacao);
        this.setPaginacao(this.produtosPaginacao);
        //console.log(this.produtosPaginacao);
        //console.log(this.paginacao);
      }
    );

  }

}
