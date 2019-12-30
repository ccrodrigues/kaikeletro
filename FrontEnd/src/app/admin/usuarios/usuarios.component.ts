import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsers;
  result;

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.showAll();
  }
  showAll() {
    //    Pegando todos os registros de usuarios
    this.usuarioService.getAll().subscribe(
      cliente => {
        console.log(cliente)
        this.listUsers = cliente;
      }

    );
  }
  // pesquisar(cpf){
  //   this.usuarioService.pesquisarPorCpf(cpf).subscribe(
  //     data =>{
  //       this.result = this.result.result

  //     }
  //   )
  // }

}
