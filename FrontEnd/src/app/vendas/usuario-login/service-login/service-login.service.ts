import { Injectable, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { EnvService } from 'src/app/env.service';




@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  @Input() isAutenticado: boolean;
  @Input() isAdmin: boolean;



  constructor(private router: Router, private usuarioService: UsuarioService
    , private http: HttpClient
    , private envService: EnvService) {

  }
  //verifica os campos email e senha na API e retorna se true ou false
  fazerLogin(login: { email: String, senha: String }) {

    this.http.post(this.envService.urlAPI + `/usuarios/login`, login).subscribe(
      (cliente) => {
        console.log("cliente ? ", cliente);
        if (cliente == true) {
          this.isAutenticado = true;
          this.router.navigate(['']);
          this.isAdmin = false;


        } else {
          this.http.post(this.envService.urlAPI + `/administrador/login`, login).subscribe(
            (admin) => {
              console.log("adiministrador ?  ", admin);
              if (admin == true) {
                this.isAutenticado = true;
                this.router.navigate(['']);
                this.isAdmin = true;

              } else {
                this.router.navigate(['login']),
                  this.isAutenticado = false;
                  this.isAdmin = false;
                console.log("Usuario válido ?  ", this.isAutenticado);


              }
            }
          )
        }



      });



  }

  getIsAutenticado() {


    return this.isAutenticado;

  }
  getIsAdmin(){
    return this.isAdmin;
  }

}
