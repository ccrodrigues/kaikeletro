import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

@Component({
  selector: 'app-melhores-ofertas',
  templateUrl: './melhores-ofertas.component.html',
  styleUrls: ['./melhores-ofertas.component.css']
})
export class MelhoresOfertasComponent implements OnInit {
  
  produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutosService) { }

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
