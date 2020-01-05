import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VendasModel } from '../models/vendas.model';
import { EnvService } from 'src/app/env.service';

@Injectable({
    providedIn: 'root'
  })
  export class VendaService {
  
    constructor(private http : HttpClient, private envService:EnvService) { }
  
    private url : string = "http://localhost:8080/";
  
    getAll() {
      return this.http.get(this.url);
    }

    fecharVenda(vendas){
        return this.http.post<VendasModel>(this.envService.urlAPI+ "/vendas",vendas);
    }
    
    getPedidos(){
      return this.http.get(" http://localhost:8080/vendas");
    }
  
  }