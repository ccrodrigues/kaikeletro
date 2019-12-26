import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoDto } from '../models/pedido.dto';
import { EnvService } from './env.service';
import { PedidoPaginacao } from '../models/paginacao/pedido.paginacao';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(public http: HttpClient, private envService: EnvService) {
  }

  fazerPedido(obj: PedidoDto) {
    return this.http.post(`${this.envService.urlAPI}/pedidos`, obj);
  }

  getAll(pagina: number = 0, linhasPorPagina: number = 6, categoria = null) {

    return this.http.get<PedidoPaginacao>(`${this.envService.urlAPI}/pedidos?page=${pagina}&linesPerPage=${linhasPorPagina}`);

  }

}
