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
          this.isAdmin = false;
          this.isAutenticado = true;
          this.router.navigate(['']);
          


        } else {
          this.http.post(this.envService.urlAPI + `/administrador/login`, login).subscribe(
            (admin) => {
              if (admin == true) {
                this.isAdmin = true;
                this.isAutenticado = true;
                this.router.navigate(['']);
                

              } else {
                this.router.navigate(['login']),
                this.isAdmin = false;
                this.isAutenticado = false;
                console.log("Usuario válido ?  ", this.isAutenticado);



              }
              // console.log("Administrador? ", this.isAdmin);
              // console.log("Usuario autenticado ?", this.isAutenticado);


            }
            
          )
          console.log(this.isAdmin);
        }


        
      });


      
  }

  getIsAutenticado() {
    // console.log(this.isAutenticado)
    return this.isAutenticado;

  }
  getIsAdmin() {
    // console.log(this.isAdmin)
    return this.isAdmin;
  }

  Logout() {
    this.isAutenticado = false;


  }
  
}
