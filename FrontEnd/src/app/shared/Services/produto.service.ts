import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/shared/services/env.service';
import { HttpClient } from '@angular/common/http';
import { ProdutoModel } from '../models/produto.model';
import { ProdutoDto } from '../models/produto.dto';
import { ProdutoPaginacao } from '../models/paginacao/produto.paginacao';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  // Chamando o HttpCliente e injetando o envService que é responsavel por pegar a url Da Api
  constructor(private http: HttpClient, private envService: EnvService) { }

  // Pegando todos os produto
  getAll() {
    //fazendo a requisição
    return this.http.get<ProdutoDto>(`${this.envService.urlAPI}/produtos`);
  }

  getProdutosPaginacao(pagina : number = 0 , linhasPorPagina : number = 6, categoria = null){

    if (categoria == null){
      return this.http.get<ProdutoPaginacao>(`${this.envService.urlAPI}/produtos/page?pagina=${pagina}&qtdLinhas=${linhasPorPagina}`);  
    }
    else {
      return this.http.get<ProdutoPaginacao>(
        `${this.envService.urlAPI}/produtos/page?pagina=${pagina}&qtdLinhas=${linhasPorPagina}&categoria=${categoria}`
        );
    }
      

  }

  //Pegando a lista de produtosDto
  getProdutoDto() {
    return this.http.get(`${this.envService.urlAPI}/produtos/carrinho`)
  }

  //Busca de ProdutoDTO por id
  getProdutoDtoId(id) {
    return this.http.get<ProdutoDto>(`${this.envService.urlAPI}/produtos/${id}`)
  }

  //pegando o produto filtrando por id
  getById(id) {
    return this.http.get<ProdutoDto>(`${this.envService.urlAPI}/produtos/${id}`);
  }
  //adcionando o produto ao banco
  saveProduto(produto) {
    return this.http.post<ProdutoDto>(`${this.envService.urlAPI}/produtos`, produto);
  }
  //deletando o produto
  deleteProduto(id) {
    return this.http.delete(`${this.envService.urlAPI}/produtos/carrinho/${id}`);
  }
  //editando um produto ja existente
  updateProduto(produto, id) {
    return this.http.patch<ProdutoModel>(`${this.envService.urlAPI}/produtos/carrinho/${id}`, produto);
  }
  //recebendo os produtos por paginacao
  getProdutoPage(pagina, qtdLinhas, direcao, campo) {
    return this.http.get<ProdutoModel[]>(this.envService.urlAPI + "produtos"
      + `pagina=${pagina}&qtdLinhas=${qtdLinhas}&direcao=${direcao}&campo=${campo}`)
  }

  getProdutoNome(nomeProduto){
    return this.http.get<ProdutoModel[]>(this.envService.urlAPI +"/produtos/nome/"+nomeProduto);
  }
}
