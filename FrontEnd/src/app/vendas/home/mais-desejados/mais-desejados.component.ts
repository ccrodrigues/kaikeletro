import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

@Component({
  selector: 'app-mais-desejados',
  templateUrl: './mais-desejados.component.html',
  styleUrls: ['./mais-desejados.component.css']
})
export class MaisDesejadosComponent implements OnInit {

  produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutosService) { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.produtoService.getProdutosCategorias("Mais-desejados").subscribe(( dados: ProdutoModel[]) => {
      console.log(dados);
      this.produtos = dados;
    })
    // this.produtoService.getAll().subscribe( (dados:ProdutoModel[]) => {
    //   this.produtos = dados;
    //   console.log(dados);
    // })
  }
}
