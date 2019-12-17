import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  constructor() { }
  @Output() close  = new EventEmitter();
  @Input() idProduto;

  ngOnInit() {
  }

  fechar() {
    this.close.emit(false);
  }
}
