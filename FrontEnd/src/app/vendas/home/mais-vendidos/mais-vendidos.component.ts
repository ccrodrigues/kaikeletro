import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css']
})
export class MaisVendidosComponent implements OnInit {

  produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutosService) { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.produtoService.getProdutosCategorias("Mais-vendidos").subscribe(( dados: ProdutoModel[]) => {
      console.log(dados);
      this.produtos = dados;
    })
  }
}