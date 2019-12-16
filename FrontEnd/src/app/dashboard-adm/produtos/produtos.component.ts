import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  isLista : boolean = true;

  ngOnInit() {
  }

  esconder() {
    console.log()
    this.isLista = !this.isLista;
  }
}
