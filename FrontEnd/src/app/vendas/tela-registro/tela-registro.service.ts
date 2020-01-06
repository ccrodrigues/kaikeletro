import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EnderecoModel } from '../../shared/models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class TelaregistroService {

  constructor(private httpClient: HttpClient) { }

  getEnderecoPorCep(endereco) :Observable<EnderecoModel> {
    return this.httpClient.get<EnderecoModel>(`https://viacep.com.br/ws/${endereco}/json/`);
  }

}