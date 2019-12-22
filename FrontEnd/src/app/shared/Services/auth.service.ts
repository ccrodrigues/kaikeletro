import { Injectable } from '@angular/core';

import { CredenciaisDto } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { CarrinhoService } from './carrinho.service';
import { LocalUserModel } from '../models/local-user.model';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
      private http: HttpClient, 
      private storage: StorageService,
      private carrinhoService: CarrinhoService,
      private envService : EnvService) {
  }

  authenticate(creds : CredenciaisDto) {
      return this.http.post(
          `${this.envService.urlAPI}/login`, 
          creds
          );
  }

  refreshToken() {
      return this.http.post(
          `${this.envService.urlAPI}/auth/refresh_token`, 
          {}
         );
  }

  fazerLogin(authorizationValue : string) {
      let tokenFromHeader = authorizationValue.substring(7);
      let user : LocalUserModel = {
          token: tokenFromHeader,
          //email: this.jwtHelper.decodeToken(tok).sub
      };
      this.storage.setLocalUser(user);
      this.carrinhoService.criarOuLimparCarrinho();
  }

  logout() {
      this.storage.setLocalUser(null);
  }
}
