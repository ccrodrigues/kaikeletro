import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { UsuarioModel } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private http: HttpClient, private envService: EnvService) {

  }

  getAll() {
    console.log(this.envService.urlAPI);
    return this.http.get<UsuarioModel[]>(this.envService.urlAPI + `/usuarios`);
  }

  getOneUsuario(id) {
    return this.http.get<UsuarioModel>(this.envService.urlAPI + `/usuarios/${id}`);
  }

  getUserByEmail(email) {
    return this.http.get<UsuarioModel>(this.envService.urlAPI + `/usuarios/email/${email}`);
  }

  addUsuario(usuario) {

    return this.http.post<UsuarioModel>(this.envService.urlAPI + `/usuarios`, usuario);
  }
  updateUsuario(id, usuario) {

    return this.http.patch<UsuarioModel>(this.envService.urlAPI + `/usuarios/${id}`, usuario);

  }
  UsuarioUser(senha, email, usuario) {

    return this.http.post<UsuarioModel[]>(this.envService.urlAPI + `/usuarios/${email}/${senha}`, usuario);
  }
  verificarNivelDeAcesso(cpf, nivel, usuario) {

    return this.http.post<UsuarioModel[]>(this.envService.urlAPI + `/usuarios/${cpf}/${nivel}`, usuario);
  }
  pesquisarPorCpf(cpf) {

    return this.http.get<UsuarioModel>(this.envService.urlAPI + `/usuarios/cpf/${cpf}`)
  }
  pesquisarPorNome(nome) {

    return this.http.get<UsuarioModel>(this.envService.urlAPI + `/usuarios/nome/${nome}`)
  }

}