import { Component, OnInit, ViewChild } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { Popover } from 'ngx-popover';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild("myPopover", { static: true }) myPopover: Popover;

  isCollapsed = false;
  isAuth: boolean=false;
  isDashboard: boolean = false;
  tooltipProdutos: ProdutoModel[];

  isHiddden = true;

  deslogar: boolean;
  nomeCliente: string = '';
  qntd;

  constructor(private menuService: menuService,
    private loginService: ServiceLoginService,
    private produtoService: ProdutosService,
    private router: Router,
    private storage: StorageService,
    private authService: AuthServiceService,
    private carrinhoService: CarrinhoService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {


    //  this.qntd = this.carrinhoService.totalItensCarrinho();
    // // //this.isAuth = this.loginService.getIsAutenticado();
    // //     //if(this.isAuth == false){
    // //      //  this.loginService.Logout();
    // //     // }
    //  console.log(this.carrinhoService.exibirItens())

  }

  ngAfterViewChecked(){

    let localUser = this.storage.getLocalUser();
    //console.log(localUser)
    this.nomeCliente = (localUser ? localUser.nome : '');

    this.isAuth = this.loginService.isAutenticado();
    if (this.storage.getLocalUser() != null) {
      this.isAuth = true;

    } else {
      this.isAuth = false;
    }

  }

  logadoAdmin() {
    this.isDashboard = this.loginService.isAdmin() && this.loginService.isAutenticado();
    return this.isDashboard;
  }

  //metodo que busca os itens da api de acordo com a pesquisa do usuario
  buscarProdutos(nomeProduto) {
    console.log(nomeProduto.value);
    if (nomeProduto.value != "") {
      this.produtoService.getProdutoNome(nomeProduto.value).subscribe(
        busca => {
          
          this.tooltipProdutos = busca;
          //this.showPopover();
          this.isHiddden = false;
        },
        e => {
          console.log(e);
        });
    }

  }

  sair() {
    this.deslogar = this.loginService.logout();
    this.dialogService.showSuccess('Logout feito com sucesso!');
  }

}

