import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http : HttpClient) { }

  private url : string = "http://localhost:8080/categorias/";

  getAll() {
    return this.http.get(this.url);
  }

}
