import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { VendaService } from 'src/app/shared/services/venda.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ps: ProdutosService,

    private vendasService: VendaService,
    private usuarioService: UsuarioService,
    private localStorage: StorageService,
    private carrinhoService: CarrinhoService) { }


  ngOnInit() {

    if (this.localStorage.getCarrinho() != null) {

      console.log(this.carrinhoService);

      this.carrinhoService.itensCarrinho = this.localStorage.getCarrinho();

    } else {

      this.carrinhoService.itensCarrinho = [];
    }
  }

  changeSuit(selectedOption: number, id): void {

    this.carrinhoService.alterarQuantidade(selectedOption, id)
    //console.log(typeof(selectedOption)) 
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

}



