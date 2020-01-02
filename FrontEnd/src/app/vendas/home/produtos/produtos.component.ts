import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ImagenModel } from 'src/app/shared/models/imagen.model';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaModel } from 'src/app/shared/models/categoria.model';

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
    @Input() id;

  constructor(
    private carrinhoService : CarrinhoService, 
    private dialogService   : DialogService) { }
  
  ngOnInit() {
    console.log("itens : " + this.carrinhoService.exibirItens())
  }

 

}
