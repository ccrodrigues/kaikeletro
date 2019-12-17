import { Injectable, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/env.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  @Input() isAutenticado: boolean;
  usuario : Usuario;
  

  constructor(private router: Router, private usuarioService: UsuarioService) { 

}
//verifica se os campos email e senha são true
fazerLogin(email : String, senha : String){
console.log(this.usuario);
    if(email == this.usuario.email && senha == this.usuario.senha){
      this.isAutenticado = true;
      this.router.navigate(['']);
    }



  // if (email == 'a' && senha == 'a'){
  //   //login aprovado
  //   this.isAutenticado = true;
  //   this.router.navigate(['']);

  // } else if (email == 'b' && senha =='b'){
  //          this.isAutenticado = true;
  //          this.router.navigate(['dashboardAdm'])
  // }
  else{
    //redirecionar para o Login
    this.isAutenticado = false;
    this.router.navigate(['login']);

  }

  }

getIsAutenticado(){
  return this.isAutenticado;
}



}
