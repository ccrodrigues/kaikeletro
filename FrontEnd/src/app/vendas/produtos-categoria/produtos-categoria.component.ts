import { Component, OnInit, DoCheck } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.css']
})

export class ProdutosCategoriaComponent implements OnInit  {

  produtos: ProdutoModel[] = [];

  categoria = null;

  constructor(private activatedRoute : ActivatedRoute, private produtoService: ProdutosService) { 
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (queryParams => {
                
        if (queryParams.nomeCategoria){
          this.categoria = queryParams.nomeCategoria;
        }

        this.paginacaoRequest();
      })
    );
  } 

  paginacaoRequest(){
    this.produtoService.getProdutosCategoria(this.categoria).subscribe(
      ( dados: ProdutoModel[]) => {
      this.produtos = dados;
      console.log(dados);
    })
  }
}
