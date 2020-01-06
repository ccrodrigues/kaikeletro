import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { VendaService } from 'src/app/shared/services/venda.service';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { ItemVendaModel } from 'src/app/shared/models/item-venda.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: ItemVendaModel[] = [];

  constructor(
    private vendasService: VendaService,
    private usuarioService: UsuarioService,
    private localStorage: StorageService,
    private carrinhoService: CarrinhoService,
    private dialog : DialogService) { }


  ngOnInit() {

    if (this.localStorage.getCarrinho() != null) {
      
      this.carrinhoService.itensCarrinho = this.localStorage.getCarrinho();
      
    } else {

      this.carrinhoService.itensCarrinho = [];
    }

    this.getCarrinho();
  }

  changeSuit(selectedOption: number, id): void {

    this.carrinhoService.alterarQuantidade(selectedOption, id)

    this.getCarrinho();
  }
  
  getUser(email) {

    let user: UsuarioModel = new UsuarioModel();

    this.usuarioService.getUserByEmail(email).subscribe(data => {
      user.id = data.id;
    })
    this.carrinhoService.user.id = user.id
  }

  private getCarrinho(){
    this.itensCarrinho = this.carrinhoService.itensCarrinho;
  }

}
