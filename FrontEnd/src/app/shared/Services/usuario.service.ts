import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/shared/services/env.service';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios;

 constructor(private http: HttpClient, private envService: EnvService) {
    
 }

getAll(){
   
   console.log(this.envService.urlAPI);
   

 return this.usuarios = this.http.get<Usuario[]>(this.envService.urlAPI + `/usuarios`);

}
 getOneUsuario(id){
  return this.usuarios = this.http.get<Usuario>(this.envService.urlAPI + `/usuarios/${id}`);
}

addUsuario( usuario ){

  return this.http.post<Usuario>(this.envService.urlAPI + `/usuarios`,usuario );
 }
updateUsuario(id, usuario){

return this.http.patch<Usuario>(this.envService.urlAPI + `/usuarios/${id}`, usuario);

}
UsuarioUser(senha, email, usuario){
  return this.http.post<Usuario[]>(this.envService.urlAPI + `/usuarios/${email}/${senha}`, usuario);
}

}