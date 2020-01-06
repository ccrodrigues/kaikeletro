import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { EnderecoModel } from '../models/endereco.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  constructor(private router: Router, private usuarioService: UsuarioService
    , private httpClient: HttpClient
    , private envService: EnvService) { 

}

getEnderecoPorCep(endereco) :Observable<EnderecoModel> {
  return this.httpClient.get<EnderecoModel>(`https://viacep.com.br/ws/${endereco}/json/`);
}
}
