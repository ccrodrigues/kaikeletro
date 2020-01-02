import { Component, OnInit, DoCheck } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.css']
})

export class ProdutosCategoriaComponent implements OnInit  {

  produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutosService) { 
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.produtoService.getProdutosCategoria(this.produtoService.categoriaProduto).subscribe(
      ( dados: ProdutoModel[]) => {
      this.produtos = dados;
      console.log(dados);
    })
  } 
}
