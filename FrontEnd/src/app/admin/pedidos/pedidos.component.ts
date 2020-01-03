import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  infosCliente;
  idPedido;
  idCliente
  nome;
  usuario;
  cpf;
  valor;
  constructor(private usuarioService: UsuarioService) {
   }


  ngOnInit() {
    this.usuarioService.getAll().subscribe(data => this.infosCliente=data);
    
    setTimeout(() => {
      console.log(this.infosCliente['0']['id']);

    }, 2000);
  }

}
