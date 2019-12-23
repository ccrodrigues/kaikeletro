import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  constructor(private ps : ProdutoService) { }
  
  @Output() close  = new EventEmitter();
  @Output() deletado = new EventEmitter();
  @Input() idProduto;

  ngOnInit() {
  }

  fechar() {
    this.close.emit();
  }

  excluir() {

    console.log(this.idProduto)
    
    this.ps.deleteProduto(this.idProduto).subscribe(
      a => {
        console.log("Etstou aqui");
        this.deletado.emit(true)
      },
      erro => {
        console.log(erro)
      }
    );
    this.fechar();
  }
}
