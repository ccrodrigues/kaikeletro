
import { Injectable, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { LocalUserModel } from 'src/app/shared/models/auth/local-user.model';
import { tokenAuth } from 'src/app/shared/models/auth/token-auth.model'
import { StorageService } from 'src/app/shared/services/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { Perfil } from 'src/app/shared/models/perfil.enum';


@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  private isAuth: boolean;
  private isAdministrador: boolean;


  isMostrarMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router,
    private http: HttpClient,
    private envService: EnvService,
    private storageService: StorageService,
    private dialogService: DialogService

  ) {
    this.isMostrarMenu.emit(false);
  }
  //verifica os campos email e senha na API e retorna se true ou false

  fazerLogin(login: { email: string, senha: string }) {

    //console.log(login);


    this.http.post<tokenAuth>(`${this.envService.urlAPI}/autenticacao`, login).subscribe(
      (data) => {

        //console.log("data : ", data);

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
        this.router.navigate(['/home']);
        this.dialogService.showSuccess('Login feito com sucesso!');

      }
    );
  }

  isAutenticado() {

    let localUser: LocalUserModel = this.storageService.getLocalUser();
    if (localUser == null) {
      this.isAuth = false;
    } else if (this.isAdmin() == true) {
      this.isAuth = true;
    }
    //console.log(localUser);

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
          //console.log('token has been refreshed');
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

    if (this.storageService.getLocalUser()) {

      //atribui o scopes a variavel administrador
      let administrador = this.storageService.getLocalUser().scopes

      //console.log("admin", administrador);
      //percorre o array de scopes e lista eles
      administrador.forEach(element => {

        //verifica pelo enum se o perfil é cliente ou administrador
        if (element == Perfil.CLIENTE) {
          this.isAdministrador = false; //false

        } else if (element == Perfil.ADMIN && Perfil.CLIENTE) {
          this.isAdministrador = true
        }
        else if (element == Perfil.ADMIN) {
          this.isAdministrador = true
        }

      });
      return this.isAdministrador;
    }
  }
}