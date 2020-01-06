import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/env.service';
import { HttpClient } from '@angular/common/http';
import { EnderecoModel } from '../models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http : HttpClient,
    private envService:EnvService
  ) { }

  getEnderecoById(id){

  }

  deleleById(id){
    return this.http.get<EnderecoModel>(this.envService.urlAPI+ "/enderecos"+"/"+id);
  }
}
