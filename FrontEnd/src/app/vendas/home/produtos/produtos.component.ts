import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/shared/Services/carrinho.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ImagenModel } from 'src/app/shared/models/imagen.model';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaModel } from 'src/app/shared/models/categoria.model';
import { Router } from '@angular/router';

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
    private route: Router) { }
  
  ngOnInit() {
    console.log("itens : " + this.carrinhoService.exibirItens())
  }
  navigateDetalhes(){
    console.log("detalhes"); 
    console.log(this.id)
    this.route.navigate([`/detalhes`, this.id])
  }

  adcionarCarrinho(){
    console.log("adcCarrinho")

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
    //this.dialogService.showSuccess("Produto adicionado no carrinho com sucesso!"); 

  }

}
