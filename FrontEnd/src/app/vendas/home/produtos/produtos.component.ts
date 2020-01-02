import { Router } from '@angular/router';
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
    private dialogService   : DialogService,
    private router : Router  ) { }
  
  ngOnInit() {
    console.log("itens : " + this.carrinhoService.exibirItens())
  }

  adcionarCarrinho(){
    
     let produto : ProdutoModel = new ProdutoModel();
     let img : ImagenModel = new ImagenModel();
     let cate : CategoriaModel = new CategoriaModel();

     let imgs : ImagenModel[] = [];
     let cat : CategoriaModel[] = []

     img.imagemProduto = this.imgSRC;

     cate.nome = this.categoria

     imgs.push(img);
     cat.push(cate)

     produto.imagens = imgs;

     produto.categorias = cat ;

    produto.idProduto = this.id;
    produto.nome = this.nome;
    produto.preco = this.preco;
    this.carrinhoService.verifyItemExists(produto);
    console.log("Adicionando " +  produto);
    this.dialogService.showSuccess("Produto adicionado no carrinho com sucesso!"); 

  }

  navigateDetalhes(){
    console.log("ID: "+this.id)
    this.router.navigateByUrl("detalhes/"+ this.id)
  }

}
