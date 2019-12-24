import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { Carrinho } from 'src/app/shared/models/carrinho.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProdutoDto } from 'src/app/shared/models/produto.dto';
import { DialogService } from 'src/app/shared/toaster/dialog.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  selectForm : FormGroup;

  totalProdutos;
  valorTotal;
  valorProdutos = 0;
  frete = 10.99;

  carrinho : Carrinho ;

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private ps: ProdutoService,
    private carrinhoService: CarrinhoService,
    private storageService : StorageService,
    private dialogService : DialogService) { }


  ngOnInit() {
    this.selectForm = this.formBuilder.group(
      {
        select: ['', [  ] ]
      }
    );

    this.carrinho = this.carrinhoService.getCarrinho();

    this.carrinho = this.getImagemPrincipal(this.carrinho);

    console.log(this.carrinho);

    this.calculoCarrinho();
  }
  
  removeItem(idProduto) {
    this.carrinho.items.splice(this.carrinho.items.findIndex(p => p.produto.idProduto == idProduto), 1);
    this.calculoCarrinho();

    this.storageService.setCarrinho(this.carrinho);

    if (this.carrinho.items.length <= 0) {      
      this.dialogService.showError("Seu carrinho está vazio");
    }
  }

  calculoCarrinho() {
    this.totalProdutos = this.carrinho.items.length;
    this.valorProdutos = this.carrinho.items.reduce(  (valorProdutos, item) => valorProdutos + (item.produto.preco * item.quantidade), 0);

    if(this.totalProdutos > 0){
      this.valorTotal = this.valorProdutos + this.frete;
    }
    else{
      this.valorTotal = 0;
    }
    
    this.carrinho.valorTotal = this.valorTotal;
  }

  aumentarQuantidade(produtoDto : ProdutoDto) {
        
    let index = this.carrinho.items.findIndex(p => p.produto.idProduto == produtoDto.idProduto);

    if (index > -1){
      this.carrinho.items[index].quantidade++;
      this.storageService.setCarrinho(this.carrinho);
    }

    this.calculoCarrinho();
    
  }

  diminuirQuantidade(produtoDto : ProdutoDto){
    let index = this.carrinho.items.findIndex(p => p.produto.idProduto == produtoDto.idProduto);

    if (index > -1){
      this.carrinho.items[index].quantidade--;

      if (this.carrinho.items[index].quantidade < 0){
        this.removeItem(produtoDto.idProduto);
      }
      this.storageService.setCarrinho(this.carrinho);
      this.calculoCarrinho();
    }
  }

  private getImagemPrincipal(carrinho: Carrinho) {

    carrinho.items.forEach((element, index) => {

      //a primeira imagem é a imagem principal do produto
      element.produto.imagemPrincipal = element.produto.imagens[0];
    });

    return carrinho;

  }

}


