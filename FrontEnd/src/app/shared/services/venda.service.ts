import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VendasModel } from '../models/vendas.model';
import { EnvService } from 'src/app/env.service';

@Injectable({
    providedIn: 'root'
  })
  export class VendaService {
  
    constructor(private http : HttpClient, private envService:EnvService) { }
  
    getAll() {
      return this.http.get(`${this.envService.urlAPI}/vendas`);
    }

    fecharVenda(vendas){
        return this.http.post<VendasModel>( `${this.envService.urlAPI}/vendas`, vendas);
    }
    
    getPedidos(){
      return this.http.get(`${this.envService.urlAPI}/vendas`);
    }

    deletarPedido(id){
      return this.http.delete(`${this.envService.urlAPI}/vendas/${id}`)
    }

    getVendaById(id){
      return this.http.get(`${this.envService.urlAPI}/vendas/${id}`);
    }
  
  }