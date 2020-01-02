import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosDetalhesService {

  constructor(private http: HttpClient) {

  }

//API correios para verificar se o CEP existe
  validarCEP(cepDestino) {
    return this.http.get("https://viacep.com.br/ws/" + cepDestino.nativeElement.value + "/json/");
  }

//metodo para calcular frete
  calcularFrete(cepDestino) {
    let data = this.http.get(
      "https://cors-anywhere.herokuapp.com/http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=01014000&sCepDestino=" + cepDestino.nativeElement.value + "&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3"
      , { responseType: 'text' })

    return data
  }



}


