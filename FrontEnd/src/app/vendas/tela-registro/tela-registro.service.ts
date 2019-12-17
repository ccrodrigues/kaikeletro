import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Endereco } from '../../shared/models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class TelaregistroService {

  constructor(private httpClient: HttpClient) { }

  getEnderecoPorCep(endereco) :Observable<Endereco> {
    return this.httpClient.get<Endereco>(`https://viacep.com.br/ws/${endereco}/json/`);
  }

}