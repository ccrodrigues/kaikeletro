import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/env.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  
  // Chamando o HttpCliente 
  constructor(private http : HttpClient) { }

  // Url da API
  url : string = "http://localhost:8080/produtos/"

  // Pegando todos os usuarios
  getAll() {
    //fazendo a requisição
    return this.http.get(this.url);
  }

  delete(id) {
    return this.http.delete(this.url + id);
  }
}
