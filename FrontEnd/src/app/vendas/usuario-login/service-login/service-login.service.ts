import { Injectable, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { EnvService } from 'src/app/env.service';




@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  @Input() isAutenticado: boolean;
  
  

  constructor(private router: Router, private usuarioService: UsuarioService
                                    , private http: HttpClient
                                    , private envService: EnvService) { 

}
//verifica se os campos email e senha são true
fazerLogin(usuario : {email : String, senha : String} ){

    if(usuario){

      this.isAutenticado = true;
      return this.http.post(this.envService.urlAPI + `/usuarios`, usuario);
    }else{
      this.isAutenticado = false;
      this.router.navigate[('login')];
    }
   
   
        
    }



  // if (email == 'a' && senha == 'a'){
  //   //login aprovado
  //   this.isAutenticado = true;
  //   this.router.navigate(['']);

  // } else if (email == 'b' && senha =='b'){
  //          this.isAutenticado = true;
  //          this.router.navigate(['dashboardAdm'])
  // }
  // else{
  //   //redirecionar para o Login
  //   this.isAutenticado = false;
  //   this.router.navigate(['login']);

  // }

  // }
  
getIsAutenticado(){
  return this.isAutenticado;
}
}
