import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/shared/Services/carrinho.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ImagenModel } from 'src/app/shared/models/imagen.model';

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

  constructor(private carrinhoService : CarrinhoService) {
    
   }

   

  
  ngOnInit() {
    console.log("itens : " + this.carrinhoService.exibirItens())
  }
  adcionarCarrinho(){
    let produto : ProdutoModel = new ProdutoModel()
    let img : ImagenModel = new ImagenModel()
    let imgs : ImagenModel[] = []
    img.imagemProduto = this.imgSRC
    imgs.push(img)

    
    produto.imagens = imgs
    

    produto.categorias = this.categoria
    produto.descricao = this.descricaoProduto
    produto.idProduto = this.id
    produto.nome = this.nome
    produto.preco = this.preco
    this.carrinhoService.verifyItemExists(produto)
    //this.carrinhoService.addProduto(produto)
    console.log("Adicionando " +  produto.imagens)
  }

}
