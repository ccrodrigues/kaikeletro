import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import * as xml2js from 'xml2js';

import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { ProdutosDetalhesService } from './produtos-detalhes.service';


// classe base para calculo do parcelamento
class Parcelamento {
  parcela: number
  valorPorParcela: number
  juros: string
  valorTotal: number
}

//variavel para converter xml da API de frete dos correios
const parser = new xml2js.Parser({ strict: false, trim: true });

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]
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

  //valor inicial para base de calculo de produto por quantidade
  valorinicialPrecoFrete;

  //valor do frete retornado pela API dos correios
  valorFrete;

  //estimativa de tempo em dias úteis para entrega. De acordo com a API de frete
  prazoentregaFrete;

  //variavel para retornar o erro de calculo de frete  
  erroFrete;

  constructor(private produtoService: ProdutosService,
    private prodDetailsCEP: ProdutosDetalhesService) {
  }

  ngOnInit() {
                    // settar aqui o id do produto(da API) que irá ser carregado na página de detalhes
    this.produtoService.getById("9").subscribe
      (data => {
        this.valorinicialPrecoFrete = data.preco;
        this.produto = data;
        this.precoAPI = data.preco;
        this.imagemAtual = this.produto.imagens[1]['imagemProduto'];
      })

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
    
    console.log(this.valorinicialPrecoFrete);
    
  }
  
  //reduzindo quantidade de produtos para compra
  removerQtdd() {
    if (this.quantidade <= 1) {
      this.quantidade = 1;
    } else {
      console.log(this.quantidade)
      console.log(this.valorinicialPrecoFrete)
      this.quantidade--;
      this.precoAPI = this.valorinicialPrecoFrete * this.quantidade;

      console.log(this.valorinicialPrecoFrete);

    }
  }

  validCEP(){
return true;
    }
  
}
