import { Injectable, Output, Input } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  @Input() isAutenticado: boolean;
  

  constructor(private router: Router) { 

}
//verifica se os campos email e senha são true
fazerLogin(email : string, senha : string){

  if (email == 'a' && senha == 'a'){
    //login aprovado
    this.isAutenticado = true;
    this.router.navigate(['']);

  }
  else{
    //redirecionar para o Login
    this.isAutenticado = false;
    this.router.navigate(['login']);

  }


}
//metodo para retorna isAutenticado
getIsAutenticado(){
  return this.isAutenticado;
}
// fazerLogin2(){
  

// }
// getOneUsuario(id){
// return 

// }
}
