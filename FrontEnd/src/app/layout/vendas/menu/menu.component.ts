import { Component, OnInit } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ProdutosCategoriaComponent } from 'src/app/vendas/produtos-categoria/produtos-categoria.component';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { VendasModule } from 'src/app/vendas/vendas.module';
import { ProdutoModel } from 'src/app/shared/models/produto.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   isCollapsed = false;
   isAuth : boolean ;
   isDashboard : boolean = false;
   deslogar : boolean ;
   nomeCliente : string = '';
   qntd;


  constructor(private menuService : menuService, 
   private loginService : ServiceLoginService,
   private router: Router,
   private storage : StorageService,
   private authService : AuthServiceService,
   private carrinhoService : CarrinhoService,
   private dialogService: DialogService,
    ) { }

  ngOnInit() {

    let localUser = this.storage.getLocalUser();
    console.log(localUser)
    this.nomeCliente = (localUser ? localUser.nome : '' );
    
    this.isAuth = this.loginService.isAutenticado();
    if(this.storage.getLocalUser()!=null){
      this.isAuth = true;

    }else{
      this.isAuth = false;
    }
    
    //  this.qntd = this.carrinhoService.totalItensCarrinho();
    // // //this.isAuth = this.loginService.getIsAutenticado();
    // //     //if(this.isAuth == false){
    // //      //  this.loginService.Logout();
    // //     // }
    //  console.log(this.carrinhoService.exibirItens())

  }
  
  logadoAdmin(){
    this.isDashboard = this.loginService.isAdmin() && this.loginService.isAutenticado();

    console.log("isAutenticado", this.loginService.isAutenticado())

    return this.isDashboard;
  }

  sair(){
    this.deslogar = this.loginService.logout();
    this.dialogService.showSuccess('Logout feito com sucesso!');
  }
  
}

