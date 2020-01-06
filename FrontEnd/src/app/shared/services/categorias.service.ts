import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http : HttpClient, private envService:EnvService) { }

  
  getAll() {
    return this.http.get(`${this.envService.urlAPI}/categorias`);
  }

  addCat(categoria) {
    return this.http.post(`${this.envService.urlAPI}/categorias`, categoria);
  }

}
