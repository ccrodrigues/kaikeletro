import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  constructor(private router: Router, private usuarioService: UsuarioService
    , private http: HttpClient
    , private envService: EnvService) { 

}

//   fazerLogin(nivelDeAcesso : {cpf : String, nivel : String} ){
   
//     console.log(nivelDeAcesso);

//    this.http.post(this.envService.urlAPI + `/usuarios/admin`, nivelDeAcesso).subscribe(
//      (data) => {
//       console.log(data);
//       if(data == true){
//         this.isAutenticado = true;
//         this.router.navigate(['logado']);
        
//       }else{
//         this.isAutenticado = false;
//         this.router.navigate(['login']);
//       }
//      }
//    );
   

//   }
  
// getIsAutenticado(){

// return this.isAutenticado;
}
