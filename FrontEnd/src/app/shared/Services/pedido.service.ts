import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoDto } from '../models/pedido.dto';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(public http: HttpClient, private envService : EnvService) {
  }

  fazerPedido(obj: PedidoDto) {
      return this.http.post( `${this.envService.urlAPI}/pedidos`,  obj );
  }

}
