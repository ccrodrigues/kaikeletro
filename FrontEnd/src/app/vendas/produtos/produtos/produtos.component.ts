import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

    @Input() categoria;
    @Input() nome;
    @Input() imgSRC;
    @Input() descricaoProduto;
    @Input() preco;

  constructor() { }

  ngOnInit() {

  }
  adicionarCarrinho(){
    alert("por enquanto não está funcionando");
  }

}
