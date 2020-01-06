import { VendaService } from 'src/app/shared/services/venda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  infosPedidos: any;

  constructor(private vendaService: VendaService) {
    this.vendaService.getPedidos().subscribe(data => this.infosPedidos = data);
  }
  
  ngOnInit() {

    setTimeout(() => {
      console.log(this.infosPedidos)
      
    }, 100);    

  }
}
  
