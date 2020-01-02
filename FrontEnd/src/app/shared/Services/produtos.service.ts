import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/env.service';
import { HttpClient } from '@angular/common/http';
import { ProdutoModel } from '../models/produto.model';
import { ProdutoDtoModel } from '../models/produto-dto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  
  // Chamando o HttpCliente e injetando o envService que é responsavel por pegar a url Da Api
  constructor(private http : HttpClient,private envService:EnvService) { }

  // Pegando todos os produto
  getAll() {
    //fazendo a requisição
    return this.http.get(this.envService.urlAPI+"/produtos");
  }

  delete(id) {
    console.log(this.envService.urlAPI + id)
    return this.http.delete(this.envService.urlAPI + id);
    // return this.http.get<ProdutoModel[]>(this.envService.urlAPI+ "produtos");
  }

  getProdutoDto(){
    return this.http.get(`${this.envService.urlAPI}/produtos/carrinho`)
  }

  //Busca de ProdutoDTO por id
  getProdutoDtoId(id){
    return this.http.get<ProdutoDtoModel>(`${this.envService.urlAPI}/produtos/carrinho/${id}`)
  }

  //pegando o produto filtrando por id
  getById(id){
    return this.http.get<ProdutoModel>(this.envService.urlAPI+ "/produtos"+"/"+id);
  }
  //adcionando o produto ao banco
  saveProduto(produto){
    return this.http.post<ProdutoModel>(this.envService.urlAPI+ "/produtos",produto);
  }
  //deletando o produto
  deleteProduto(id){
    return this.http.delete(this.envService.urlAPI+ "/produtos"+"/"+id);
  }
  //editando um produto ja existente
  updateProduto(produto,id){
    return this.http.patch<ProdutoModel>(this.envService.urlAPI+ "/produtos/"+id,produto);
  }
  //recebendo os produtos por paginacao
  getProdutoPage(pagina,qtdLinhas,direcao,campo){
    return this.http.get<ProdutoModel[]>(this.envService.urlAPI+ "/produtos"
    +`pagina=${pagina}&qtdLinhas=${qtdLinhas}&direcao=${direcao}&campo=${campo}`)
  }
}
