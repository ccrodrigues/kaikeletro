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
  
  

  constructor(private router: Router, private usuarioService: UsuarioService
                                    , private http: HttpClient
                                    , private envService: EnvService) { 

}
//verifica os campos email e senha na API e retorna se true ou false
fazerLogin(login : {email : String, senha : String} ){
   
      console.log(login);
    
     this.http.post(this.envService.urlAPI + `/usuarios/login`, login).subscribe(
       (data) => {
        console.log(data);
        if(data == true){
          this.isAutenticado = true;
          this.router.navigate(['logado']);
          
        }else if(data == false){
          this.http.post(this.envService.urlAPI + `/administrador/login`, login).subscribe(
            (admin) => {
              console.log(admin);
              if(admin == true){
                this.isAutenticado = true;
                this.router.navigate(['dashboardAdm']);
              }
            }
          )
        }
        else{
          this.router.navigate(['login']),
          this.isAutenticado = false;
        }
    
       
      });

     

    }
    
getIsAutenticado(){
  
  return this.isAutenticado;
}



}
