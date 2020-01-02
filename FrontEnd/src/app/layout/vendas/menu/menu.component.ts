import { Component, OnInit } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   isCollapsed = false;
   isAuth : boolean = true;
   isDashboard : boolean = false;
   qntd;
 
  constructor(
    private menuService : menuService, 
    private loginService : ServiceLoginService,
    private router: Router,
    private storage : StorageService,
    private authService : AuthServiceService,
    private carrinhoService : CarrinhoService ) { }

  ngOnInit() {

    if(this.storage.getLocalUser()!=null){
      this.isAuth = true;
    }else{
      this.isAuth = false;
    }

    this.carrinhoService.itensCarrinho = this.storage.getCarrinho()


     this.qntd = this.carrinhoService.totalItensCarrinho();
    //this.isAuth = this.loginService.getIsAutenticado();
        //if(this.isAuth == false){
         //  this.loginService.Logout();
        // }
  console.log(this.carrinhoService.exibirItens())

  }


  logadoAdmin(){
      this.isDashboard = this.loginService.getIsAdmin() && this.loginService.getIsAutenticado();

      return this.isDashboard;     
  }

  sair(){
    this.loginService.Logout()
    this.isAuth = false;
    this.isDashboard = false;
    console.log(this.isDashboard)
  }


}

