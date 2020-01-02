import { Component, OnInit } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
import { ProdutosCategoriaComponent } from 'src/app/vendas/produtos-categoria/produtos-categoria.component';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { VendasModule } from 'src/app/vendas/vendas.module';
import { ProdutoModel } from 'src/app/shared/models/produto.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   isCollapsed = false;
   isAuth : boolean = true;
   isDashboard : boolean = false;

  constructor(private menuService : menuService, private loginService : ServiceLoginService
   ,private router: Router, private produtoService : ProdutosService) { }

  ngOnInit() {
     
    this.isAuth = this.loginService.getIsAutenticado();
        if(this.isAuth == false){
           this.loginService.Logout();
         }
   
  }
  
  logadoAdmin(){
      this.isDashboard = this.loginService.getIsAdmin() && this.loginService.getIsAutenticado();

      return this.isDashboard;
         
  }

  produtoPorCategoria(nomeCategoria){
    this.produtoService.categoriaProduto = nomeCategoria;
    console.log("Ola " + nomeCategoria);
  }
}

