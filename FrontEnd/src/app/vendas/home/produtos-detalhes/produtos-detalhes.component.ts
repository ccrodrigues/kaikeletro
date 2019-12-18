import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]
})
export class ProdutosDetalhesComponent implements OnInit {



  slides = [
    { image: 'https://images-submarino.b2w.io/produtos/01/00/image/134241/7/134241731_7GG.jpg' },
    { image: 'https://images-submarino.b2w.io/produtos/01/00/image/134241/7/134241731_8GG.jpg' },
    { image: 'https://images-submarino.b2w.io/produtos/01/00/image/134241/7/134241731_9GG.jpg' },
    { image: 'https://images-submarino.b2w.io/produtos/01/00/image/134241/7/134241731_7GG.jpg' },
  ];
  numerosParcela= [1,2,3,4,5,6,7,8,9,10,11,12];
  numeroParcelaAtual=1; 
  imagemAtual = this.slides[0].image;
  Preco:number=4000;
  Parcela=""+this.Preco;


  constructor() { }

  ngOnInit() {
  }
  trocarImagem(img) {
    this.imagemAtual = img;
  }

  mudarParcela(numero){
    this.numeroParcelaAtual=numero;
    this.Parcela=((this.Preco)/this.numeroParcelaAtual).toFixed(2);
  }

}