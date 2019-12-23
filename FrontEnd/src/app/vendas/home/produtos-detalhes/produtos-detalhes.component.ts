import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { NgxMaskModule } from 'ngx-mask'
import { ProdutosDetalhesService } from './produtos-detalhes.service';

class Parcelamento {
  parcela: number
  valorPorParcela: number
  juros: string
  valorTotal: number
}

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]
})
export class ProdutosDetalhesComponent implements OnInit {

  @ViewChild("modal", { static: false }) modal;

  produto: ProdutoModel = new ProdutoModel();

  imagemAtual = "";

  Parcela;
  precoAPI;
  @ViewChild("cep", { static: false }) cep;

  parcelamentos: Parcelamento[] = [];

  constructor(private produtoService: ProdutosService,
              private prodDetailsCEP: ProdutosDetalhesService) {   
  }


  ngOnInit() {
    this.produtoService.getById("9").subscribe
      (data => {
        this.produto = data;
        this.precoAPI = data.preco;
        this.imagemAtual = this.produto.imagens[1].imagemProduto;
      }
      );

  }

  trocarImagem(img) {
    this.imagemAtual = img;
  }

  valorPorParcela() {
    this.parcelamentos = []
    for (let index = 1; index < 13; index++) {

      let parcelaCalc = index;
      let valorPorParcelaCalc = this.precoAPI / index;

      let jurosCalc = (index < 11)
        ? "Sem Juros"
        : "Com juros de 2,29 % a.m.";

      let valorTotalCalc = (index < 11)
        ? this.precoAPI
        : this.calcJuros(valorPorParcelaCalc, index);

      let tmp = {
        parcela: parcelaCalc,
        valorPorParcela: valorPorParcelaCalc,
        juros: jurosCalc,
        valorTotal: valorTotalCalc
      };

      this.parcelamentos.push(tmp)

    }
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }

  private calcJuros(vlPorParcelas, mesesJuros) {
    let taxa = 2.29;
    let capital = vlPorParcelas;
    let meses = mesesJuros;
    let valorSemParcelas = this.precoAPI;

    let montante = capital * Math.pow((1 + taxa / 100), meses);

    return montante + valorSemParcelas;
  }
 
// calcularCEP(){
//   this.prodDetailsCEP.getCEP("04547000", 3000).subscribe(data => console.log(data));
// }
 

 
}
