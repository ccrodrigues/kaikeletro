import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { Administrador } from '../models/administrador.module';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  administrador;

 constructor(private http: HttpClient, private envService: EnvService) {
    
 }

getAll(){
   
   console.log(this.envService.urlAPI);
   

 return this.administrador = this.http.get<Administrador[]>(this.envService.urlAPI + `/administrador`);

}
 getOneAdministrador(id){
  return this.administrador = this.http.get<Administrador>(this.envService.urlAPI + `/administrador/${id}`);
}

addAdministrador( administrador ){

  return this.http.post<Administrador>(this.envService.urlAPI + `/administrador`,administrador );
 }
updateAdministrador(id, administrador){

return this.http.patch<Administrador>(this.envService.urlAPI + `/administrador/${id}`, administrador);

}
administradorUser(senha, email, administrador){
  return this.http.post<Administrador[]>(this.envService.urlAPI + `/administrador/${email}/${senha}`, administrador);
}

// verificarIsAdmin(cpf, nivel, administrador){
//   return this.http.post<Administrador[]>(this.envService.urlAPI + `/administrador/${cpf}/${nivel}`, administrador);
// }
verificarNivelDeAcesso(nivel, administrador){
  return this.http.get<Administrador[]>(this.envService.urlAPI + `/administrador/nivel/${nivel}`, administrador)
}


}
