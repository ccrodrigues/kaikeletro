import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';

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
    this.produtoService.getProdutosCategoria("Mais-desejados").subscribe(( dados: ProdutoModel[]) => {
      this.produtos = dados;
      console.log(dados);
    })
    // this.produtoService.getAll().subscribe( (dados:ProdutoModel[]) => {
    //   this.produtos = dados;
    //   console.log(dados);
    // })
  }
}
