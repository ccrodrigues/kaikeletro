import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemVendaModel } from '../models/item-venda.model';
import { VendasModel } from '../models/vendas.model';
import { ProdutoModel } from '../models/produto.model';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/env.service';
import { Usuario } from '../models/usuario.model';
import { StorageService } from './storage.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private envService: EnvService,
    private localStorage: StorageService,
    private usuarioService: UsuarioService) { }


  itensCarrinho: ItemVendaModel[] = [];

  venda: VendasModel = new VendasModel();

  user: Usuario = new Usuario();

  valorTotal: number;
  frete: number = 20;

  criarOuLimparCarrinho(): ItemVendaModel[] {
    let carrinho: ItemVendaModel[] = null;
    this.localStorage
    this.itensCarrinho = []
    return carrinho;
  }

  getCarrinho(): ItemVendaModel[] {
    let cart: ItemVendaModel[] = this.localStorage.getCarrinho();
    if (cart == null) {
      cart = this.criarOuLimparCarrinho();
    }
    return cart;
  }

  public exibirItens(): ItemVendaModel[] {
    return this.itensCarrinho
  }


  public addProduto(produ: ProdutoModel = new ProdutoModel(), quant) {
    let item: ItemVendaModel = new ItemVendaModel()
    item.produto = produ
    item.quantidade = quant
    this.itensCarrinho.push(item)
    console.log(item)
  }


  public alterarQuantidade(selectedOption, id): void {

    let num = parseInt(selectedOption)

    let find = this.itensCarrinho.find((item: ItemVendaModel) => item.produto.idProduto === id)

    if (find) {
      find.quantidade = num
    }
    console.log(this.itensCarrinho)
    console.log(selectedOption)
    console.log(id)
    this.localStorage.setCarrinho(this.itensCarrinho);

  }


  removeItem(idProduto) {
    this.itensCarrinho.splice(this.itensCarrinho.findIndex(p => p.produto.idProduto == idProduto), 1);
    this.localStorage.setCarrinho(this.itensCarrinho);
  }

  calculoCarrinho() {
    let totalValor = 0
    totalValor = this.itensCarrinho.reduce((valorProdutos, item) => valorProdutos + (item.produto.preco * item.quantidade), 0)
    return totalValor
  }

  valorTotalFrete() {
    let totalFrete = 0;
    return totalFrete = this.calculoCarrinho() + this.frete;
  }

  totalItensCarrinho() {
    let total = 0
    this.itensCarrinho.map(function (item) {
      total = total + (item.quantidade);
    });
    return total;
  }

  verifyItemExists(produ: ProdutoModel = new ProdutoModel(), quant) {
    
    let find = this.itensCarrinho.find( (item: ItemVendaModel) => item.produto.idProduto === produ.idProduto)
    
    if (find) {
      find.quantidade += quant;
    } else {
      this.addProduto(produ, quant)
    }
    this.localStorage.setCarrinho(this.itensCarrinho);
  }

  totalizarVenda() {
    this.user.email = this.localStorage.getLocalUser().email
    // this.venda.usuario = this.user;
    this.venda.pagamento = "Aguardando";
    this.venda.status = "Aberta";
    this.venda.totalItens = this.totalItensCarrinho();
    this.venda.valor = this.valorTotalFrete()
    this.venda.parcela = 10;
    this.venda.valorParcela = this.valorTotalFrete() / this.venda.parcela;
    this.venda.usuario = this.user
  }


  fecharVenda() {
    this.totalizarVenda();
    this.venda.item = this.itensCarrinho
    console.log("Venda: " + this.itensCarrinho)
    console.log("User: " + this.user.id)
  }

}
