import { Component, OnInit } from '@angular/core';
import { PedidoPaginacao } from 'src/app/shared/models/paginacao/pedido.paginacao';
import { Paginacao } from 'src/app/shared/models/paginacao/paginacao.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { PedidoDto } from 'src/app/shared/models/pedido.dto';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidosPaginacao : PedidoPaginacao ;

  paginacao : Paginacao = {
    pagina : 0,
    linhasPorPagina : 3,
    totalPaginas : 0,
    totalElementos : 0
  };

  categoria = null;

  constructor(
    private activatedRoute : ActivatedRoute,
    private pedidoservice : PedidoService,
    private router : Router) { }

  ngOnInit() {

    this.paginacaoRequest();

  }

  mostrarPedidoDetalhes(pedido : PedidoDto){
    this.router.navigate(['pedidos-detalhes', pedido.id]);
  }

  primeiraPagina(){
    this.paginacao.pagina = 0; console.log(this.paginacao);
    this.paginacaoRequest();

  }

  proximaPagina(){
    this.paginacao.pagina = this.paginacao.pagina + 1; console.log(this.paginacao);
    this.paginacaoRequest(); 
  }

  anteriorPagina(){

    this.paginacao.pagina = this.paginacao.pagina - 1; console.log(this.paginacao);

    if (this.paginacao.pagina < 0){
      this.paginacao.pagina = 0;
    }
    this.paginacaoRequest();
  }

  ultimaPagina(){
    this.paginacao.pagina = this.paginacao.totalPaginas - 1; console.log(this.paginacao);
    this.paginacaoRequest();
  }

  private setPaginacao(pedidosPaginacao : PedidoPaginacao){
      this.paginacao.pagina = pedidosPaginacao.number;
      this.paginacao.totalPaginas = pedidosPaginacao.totalPages;
      this.paginacao.totalElementos = pedidosPaginacao.totalElements;
      this.paginacao.linhasPorPagina = pedidosPaginacao.size;
  }

  private paginacaoRequest(){

    this.pedidoservice.getAll(this.paginacao.pagina, this.paginacao.linhasPorPagina ).subscribe(
      (dados)=>{
        this.pedidosPaginacao = dados;        
        this.setPaginacao(this.pedidosPaginacao);
        console.log(this.pedidosPaginacao);
        //console.log(this.paginacao);
      }
    );

  }

}
