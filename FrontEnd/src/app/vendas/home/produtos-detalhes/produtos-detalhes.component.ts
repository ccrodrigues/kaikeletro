import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import * as xml2js from 'xml2js';

import { ProdutoModel } from 'src/app/shared/models/produto.model';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
=======
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { ProdutosDetalhesService } from './produtos-detalhes.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenModel } from 'src/app/shared/models/imagen.model';
import { CategoriaModel } from 'src/app/shared/models/categoria.model';


// classe base para calculo do parcelamento
class Parcelamento {
  parcela: number
  valorPorParcela: number
  juros: string
  valorTotal: number
}

//variavel para converter xml da API de frete dos correios
const parser = new xml2js.Parser({ strict: false, trim: true });
>>>>>>> e0324952bf054d426e779c9604e76a6eaf93d294

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css']
  //,
  //providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true }, }]
})
export class ProdutosDetalhesComponent implements OnInit {
  produto: ProdutoModel = new ProdutoModel();

  //variavel para ações do modal
  @ViewChild("modal", { static: false }) modal;

  //variavel para tratar validação do CEP e calculo de frete
  @ViewChild("cep", { static: false }) cep: string;

  //variavel para definir quantidade de produtos que o cliente deseja comprar
  quantidade = 1;

  //variavel para mostrar frete, caso o usuario já ter digitado o cep 
  showFrete: boolean = false;

  //varivel responsavel por identificar se o CEP existe ou é valido
  isCepValid: boolean = false;

  //array para definir parametros para parcela
  parcelamentos: Parcelamento[] = [];

  //imagem principal do produto
  imagemAtual = "";

  //valor do preco da API duplicado para a variavel precoAPI para tratamentos
  precoAPI;

  //valor FINAL do produto com os calculos de juros 
  valorTotalCalc;

<<<<<<< HEAD
  numerosParcela= [1,2,3,4,5,6,7,8,9,10,11,12];
  numeroParcelaAtual=1; 
  imagemAtual ;
  Preco:number;
  Parcela;
  idRota;
=======
  //valor inicial para base de calculo de produto por quantidade
  valorinicialPrecoFrete;
>>>>>>> e0324952bf054d426e779c9604e76a6eaf93d294

  //valor do frete retornado pela API dos correios
  valorFrete;

<<<<<<< HEAD
   constructor(
    private produtoService:ProdutosService,  
    private activateRoute : ActivatedRoute,
    private carrinhoService : CarrinhoService, 
    private dialogService   : DialogService) { 
     
  }

   ngOnInit() {

    this.activateRoute.params.subscribe((data)=>{this.idRota = data.id;
      console.log("Id da rota: " + this.idRota); 
    });

    this.produtoService.getById(this.idRota).subscribe(  data =>{
      this.produto=data;
      this.Preco=data.preco; 
      this.Parcela=data.preco
      this.imagemAtual=this.produto.imagens[0].imagemProduto;
    });
    console.log(this.produto)
   
=======
  //estimativa de tempo em dias úteis para entrega. De acordo com a API de frete
  prazoentregaFrete;

  //variavel para retornar o erro de calculo de frete  
  erroFrete;

  idProdutoAPI: string;
  id: number;

  constructor(private produtoService: ProdutosService,
    private prodDetailsCEP: ProdutosDetalhesService,

    private router: Router,
    private activatedRoute: ActivatedRoute,
    
    config: NgbCarouselConfig
  ) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    // settar aqui o id do produto(da API) que irá ser carregado na página de detalhes
    this.activatedRoute.params.subscribe(data => {
      this.idProdutoAPI=data.id;
    })


    this.produtoService.getById(this.idProdutoAPI).subscribe
      (data => {
        this.valorinicialPrecoFrete = data.preco;
        this.produto = data;
        this.precoAPI = data.preco;
        this.imagemAtual = this.produto.imagens[0]['imagemProduto'];
      })

>>>>>>> e0324952bf054d426e779c9604e76a6eaf93d294
  }

  //  metodo para trocar de imagem quando clicar
  trocarImagem(img) {
    this.imagemAtual = img;
  }

  // metodo para calcular todas as parcelas de acordo com as informações da API
  valorPorParcela() {
    this.parcelamentos = []
    for (let index = 1; index < 13; index++) {

      let parcelaCalc = index;
      let valorPorParcelaCalc = this.precoAPI / index;
      let jurosCalc = (index < 11)
        ? "Sem Juros"
        : "Com juros de 2,29 % a.m.";
      this.valorTotalCalc = (index < 11)
        ? this.precoAPI
        : this.calcJuros(valorPorParcelaCalc, index);

      let tmp = {
        parcela: parcelaCalc,
        valorPorParcela: valorPorParcelaCalc,
        juros: jurosCalc,
        valorTotal: this.valorTotalCalc
      };

      this.parcelamentos.push(tmp)

    }
    this.modal.nativeElement.style.display = 'block';
  }

<<<<<<< HEAD
  adcionarCarrinho(){

    this.carrinhoService.verifyItemExists(this.produto);
    console.log("Adicionando " +  this.produto);
    this.dialogService.showSuccess("Produto adicionado no carrinho com sucesso!"); 

 }

}
=======
  //metodo para fechar o modal
  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }

  //metodo para calcular os juros
  private calcJuros(vlPorParcelas, mesesJuros) {
    let taxa = 2.29;
    let capital = vlPorParcelas;
    let meses = mesesJuros;
    let valorSemParcelas = this.precoAPI;

    //funcao para calculo de juros
    let montante = capital * Math.pow((1 + taxa / 100), meses);

    return montante + valorSemParcelas;
  }


  //funcao para validar se o cep existe
  validarCEP() {
    try {
      if (this.cep['nativeElement'].value.length == 8) {
        this.prodDetailsCEP.validarCEP(this.cep).subscribe((data) => {

          if (data['erro'] || data['cep'] == null || data['cep'] == undefined) {
            this.isCepValid = false;
          }
          else {
            this.isCepValid = true;
          }
        })
        this.isCepValid = true;
      } else {
        this.isCepValid = false;
      }

    } catch (error) {
      console.log(error)
    }
  }

  //metodo para calcular o valor do frete e a estimativa de dias que será entregue
  calcularFrete() {
    this.prodDetailsCEP.calcularFrete(this.cep).subscribe(data => {
      //convertendo XMJ to Json
      parser.parseString(data, (err, result) => {

        let xml = result;

        if (xml) { this.showFrete = true; }

        this.valorFrete = xml['SERVICOS']['CSERVICO'][0]['VALOR'];
        this.prazoentregaFrete = xml['SERVICOS']['CSERVICO'][0]['PRAZOENTREGA'];
        this.erroFrete = xml['SERVICOS']['CSERVICO'][0]['ERRO'];
      });

    }
    );
  }

  //adicionando quantidade de produtos para compra
  adicionarQtdd() {
    this.quantidade++;
    this.precoAPI = this.valorinicialPrecoFrete * this.quantidade;
  }

  //reduzindo quantidade de produtos para compra
  removerQtdd() {
    if (this.quantidade <= 1) {
      this.quantidade = 1;
    } else {
      this.quantidade--;
      this.precoAPI = this.valorinicialPrecoFrete * this.quantidade;
    }
  }

  validCEP() {
    return true;
  }

  navigateComprarAgora(){
    console.log("comprar agora"); 
    this.router.navigate([`/entrega`])
  }
 
adicionarCarrinho(){
  console.log("adicionando ao carrinho")
  let compra=[{
  
    "idProduto":  this.idProdutoAPI,
    "valorProduto":  this.valorTotalCalc,
    "valorFreteProduto":  this.valorFrete,
    "quantidadeProduto":  this.quantidade
  }]


  
}}
>>>>>>> e0324952bf054d426e779c9604e76a6eaf93d294
