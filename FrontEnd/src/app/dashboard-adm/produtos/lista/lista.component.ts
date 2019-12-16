import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  isShowMore : boolean = false;
  @Input() Produtos = [];
  pesquisado;
  selecionado;

  constructor() { }

  ngOnInit() {
  }

  showMore(prod) {
    this.isShowMore = true;
    this.selecionado = prod;
  }

  showless(event) {
    console.log("to aqui");
    console.log(event)
    this.isShowMore = false;
  }



} 
