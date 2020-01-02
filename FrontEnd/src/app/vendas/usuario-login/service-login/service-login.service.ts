
import { Injectable, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { EnvService } from 'src/app/env.service';
import { LocalUserModel } from 'src/app/shared/models/auth/local-user.model';
import { tokenAuth } from 'src/app/shared/models/auth/token-auth.model'
import { StorageService } from 'src/app/shared/services/storage.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DialogService } from 'src/app/shared/toaster/dialog.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  private isAuth: boolean;
  private isAdministrador: boolean;


  isMostrarMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private http: HttpClient,
    private envService: EnvService,
    private storageService: StorageService,
    private dialogService: DialogService
    , private carrinhoService: CarrinhoService

  ) {
    this.isMostrarMenu.emit(false);
  }
  //verifica os campos email e senha na API e retorna se true ou false

  fazerLogin(login: { email: string, senha: string }) {

    console.log(login);


    this.http.post<tokenAuth>(`${this.envService.urlAPI}/autenticacao`, login).subscribe(
      (data) => {

        console.log("data : ", data);

        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.token);


        this.isAuth = true;
        this.isMostrarMenu.emit(true);


        let localUser: LocalUserModel = {
          token: data.token,

          email: decodedToken.sub,
          nome: decodedToken.nome,
          exp: decodedToken.exp,
          iat: decodedToken.iat,
          scopes: decodedToken.scopes.split(',')
        }

        this.storageService.setLocalUser(localUser);

        this.dialogService.showSuccess('Login feito com sucesso!');

        this.router.navigate(['/home']);

      }
    );
  }

  isAutenticado() {

    let localUser: LocalUserModel = this.storageService.getLocalUser();
    if (localUser == null) {
      this.isAuth = false;
    }
    //console.log(localUser);
    //console.log("isAuth2:",this.isAuth);
    return this.isAuth;
  }


  logout() {
    this.storageService.setLocalUser(null);
    this.isAuth = false;
    return this.isAuth;
  }

  /** pegar um novo token válido com data de expiração válida  */
  refreshToken() {
    return this.http.post<tokenAuth>(`${this.envService.urlAPI}/token/refresh`, {})
      .subscribe(
        (response) => {
          console.log('token has been refreshed');
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(response.token);

          let localUser: LocalUserModel = {
            token: response.token,

            email: decodedToken.sub,
            nome: decodedToken.nome,
            exp: decodedToken.exp,
            iat: decodedToken.iat,
            scopes: decodedToken.scopes.split(',')
          }

          this.storageService.setLocalUser(localUser);
        }
      );
  }
  isAdmin() {
    let administrador
    if (this.storageService.getLocalUser()) {
      administrador = this.storageService.getLocalUser().scopes

      if (administrador == "ROLE_CLIENTE") {
        this.isAdministrador = true;

      } else {
        this.isAdministrador = false;
      }
      return this.isAdministrador;
    }
  }
}