import { Component, OnInit, Input, Output } from '@angular/core';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  isShowMore: boolean = false;
  isDelete: boolean = false;

  @Input() Produtos;
  pesquisado;
  selecionado;
  listProducts;
  id;

  ngOnInit() {
    this.showAll();

  }

  showMsgApagou() {
    console.log("Apagou!")
    this.showAll();
  }

  showAll() {
    //    Pegando todos os registros de produtos
    this.ps.getAll().subscribe(
      a => {
        this.listProducts = a;
      }
    );
  }

  showMore(prod) {
    this.isShowMore = true;
    this.selecionado = prod;
  }

  lessMore() {
    this.isShowMore = false;
  }

  showDelete(id) {
    this.isDelete = true;
    this.id = id;
  }

  lessDelete() {
    this.isDelete = false;
  }


  constructor(private ps: ProdutosService) { }

} 
