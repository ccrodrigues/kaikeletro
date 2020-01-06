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
  isShowMore=false;


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

  excluir(idExcluir) {

    console.log(idExcluir)
    if (confirm("Deseja realmente excluir o pedido com id: " + idExcluir)) {
      this.vendaService.deletarPedido(idExcluir).subscribe((resposta) => {
        this.infosPedidos.splice(this.infosPedidos.findIndex(p => p.id == idExcluir), 1);
        setTimeout(() => { alert("Deletado com sucesso"); }, 400)
      }
      );
    } else {
      alert("O pedido NÃO foi cancelado!")
    }
  }

}

