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

  // Url da API
  url : string = "http://localhost:8080/produtos"

  // Pegando todos os produto
  getAll() {
    //fazendo a requisição
<<<<<<< HEAD
    return this.http.get(this.url);
=======
    return this.http.get(this.envService.urlAPI+"/produtos");
>>>>>>> 8b18008e6431ad8adbdf346c40854065d505090c
  }

  delete(id) {
    console.log(this.url + id)
    return this.http.delete(this.url + id);
    // return this.http.get<ProdutoModel[]>(this.envService.urlAPI+ "produtos");
  }

  getProdutoDto(){
    return this.http.get(`${this.envService.urlAPI}produtos/carrinho`)
  }

  //Busca de ProdutoDTO por id
  getProdutoDtoId(id){
    return this.http.get<ProdutoDtoModel>(`${this.envService.urlAPI}produtos/carrinho/${id}`)
  }

  //pegando o produto filtrando por id
  getById(id){
    return this.http.get<ProdutoModel>(this.envService.urlAPI+ "produtos"+"/"+id);
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
    return this.http.patch<ProdutoModel>(this.envService.urlAPI+ "/produtos"+"/"+id,produto);
  }
  //recebendo os produtos por paginacao
  getProdutoPage(pagina,qtdLinhas,direcao,campo){
    return this.http.get<ProdutoModel[]>(this.envService.urlAPI+ "produtos"
    +`pagina=${pagina}&qtdLinhas=${qtdLinhas}&direcao=${direcao}&campo=${campo}`)
  }
}
