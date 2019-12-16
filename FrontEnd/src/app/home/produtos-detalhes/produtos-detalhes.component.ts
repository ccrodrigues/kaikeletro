import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css']
})
export class ProdutosDetalhesComponent implements OnInit {

  slides= [
    {image: 'https://images-submarino.b2w.io/produtos/01/00/image/134241/7/134241731_7GG.jpg'},
    {image: 'https://images-submarino.b2w.io/produtos/01/00/image/134241/7/134241731_8GG.jpg'},
    {image: 'https://images-submarino.b2w.io/produtos/01/00/image/134241/7/134241731_9GG.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
