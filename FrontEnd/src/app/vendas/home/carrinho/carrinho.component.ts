import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { VendaService } from 'src/app/shared/services/venda.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
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

      console.log(this.carrinhoService);

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

  finalizarVenda() {
    this.carrinhoService.fecharVenda();
    this.vendasService.fecharVenda(this.carrinhoService.venda).subscribe(
      (data) => {
        data = data
        console.log(data)
        console.log(this.carrinhoService.itensCarrinho);
        this.carrinhoService.itensCarrinho = this.carrinhoService.criarOuLimparCarrinho()
        this.localStorage.setCarrinho(this.carrinhoService.itensCarrinho)

        this.getCarrinho();

        this.dialog.showSuccess("Venda realizada com sucesso!");
      }
    )
  }

  getUser(email) {

    let user: Usuario = new Usuario();

    this.usuarioService.getUserByEmail(email).subscribe(data => {
      user.id = data.id;
    })
    this.carrinhoService.user.id = user.id
  }

  private getCarrinho(){
    this.itensCarrinho = this.carrinhoService.itensCarrinho;
  }

}



