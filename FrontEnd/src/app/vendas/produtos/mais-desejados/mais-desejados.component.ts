import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-mais-desejados',
  templateUrl: './mais-desejados.component.html',
  styleUrls: ['./mais-desejados.component.css']
})
export class MaisDesejadosComponent implements OnInit {

  produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.produtoService.getAll().subscribe( (dados:ProdutoModel[]) => {
      this.produtos = dados;
      console.log(dados);
    })
  }
}
