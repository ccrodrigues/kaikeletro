import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-melhores-ofertas',
  templateUrl: './melhores-ofertas.component.html',
  styleUrls: ['./melhores-ofertas.component.css']
})
export class MelhoresOfertasComponent implements OnInit {
  
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