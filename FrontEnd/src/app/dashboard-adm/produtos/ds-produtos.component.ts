import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './ds-produtos.component.html',
  styleUrls: ['./ds-produtos.component.css']
})
export class DSProdutosComponent implements OnInit {

  constructor() { }

  isLista : boolean = true;

  ngOnInit() {
  }

  esconder(boo) {
    console.log()
    this.isLista = boo;
  }
}
