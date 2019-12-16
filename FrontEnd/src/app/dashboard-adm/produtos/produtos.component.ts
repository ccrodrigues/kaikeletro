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

  produtos = [
    {
      ID: 1,
      Nome: 'Celular XAIOMI',
      Preco: 690.29,
      Categoria: {
        ID: 1,
        Nome: 'Eletronico'
      },
      Descricao: 'Celular xaomi 32gb 8gb RAM dual chip bluetooth'
    },
    {
      ID: 2,
      Nome: 'Celular Samsung',
      Preco: 690.29,
      Categoria: {
        ID: 2,
        Nome: 'Celular'
      },
      Descricao: 'Celular Samsung 32gb 8gb RAM dual chip bluetooth'
    },
    {
      ID: 3,
      Nome: 'Microondas XIAOMI',
      Preco: 988.29,
      Categoria: {
        ID: 3,
        Nome: 'Eletrodomestico'
      },
      Descricao: 'Esquenta tudo rapidinho'
    },
    {
      ID: 4,
      Nome: 'Relogio Watch',
      Preco: 100.29,
      Categoria: {
        ID: 4,
        Nome: 'Relogio'
      },
      Descricao: 'Relogio apple muito loko top'
    }
  ]

  esconder(boo) {
    console.log()
    this.isLista = boo;
  }
}
