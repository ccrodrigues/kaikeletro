import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VendaService } from 'src/app/shared/services/venda.service';
import { Component, OnInit, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  infosPedidos: any;
  showMoreByid;
  itens = [];


  constructor(private vendaService: VendaService,
    private el: ElementRef,
    private _modal: NgbModal) {
    this.vendaService.getPedidos().subscribe(data => this.infosPedidos = data);
  }

  ngOnInit() {


  }

  @ViewChild("modal", { static: false }) modal;


  showMore(idSearch) {
    this.showMoreByid = this.infosPedidos[idSearch - 1]
    this.itens = this.showMoreByid.item;
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }

  excluir(id) {
    if (confirm("Deseja realmente excluir o pedido com id: " + id)) {
      this.vendaService.deletarPedido(id).subscribe((resposta) => {
        this.infosPedidos.splice(this.infosPedidos.findIndex(p => p.id == id), 1);
        setTimeout(() => { alert("Deletado com sucesso"); }, 400)
      }
      );
      alert("O pedido foi cancelado!")
    } else {
      alert("O pedido NÃO foi cancelado!")
    }
  }

}

