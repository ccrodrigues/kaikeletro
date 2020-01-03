import { Component, OnInit, ViewChild } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';

import { Popover } from 'ngx-popover';
import { isNull } from 'util';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild("myPopover", {static:true}) myPopover : Popover;

   isCollapsed = false;
   isAuth : boolean = true;
   isDashboard : boolean = false;
   tooltipProdutos : ProdutoModel [] ;

   isHiddden = true;
 


  constructor(private menuService : menuService, private loginService : ServiceLoginService
   ,private router: Router,
   private produtoService : ProdutosService ) { }

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

  //metodo que busca os itens da api de acordo com a pesquisa do usuario
  buscarProdutos(nomeProduto){
     console.log(nomeProduto);
    if(nomeProduto.value != nomeProduto.isNull){
    this.produtoService.getProdutoNome(nomeProduto.value).subscribe(
      a => { 
        console.log(this.myPopover);
        this.tooltipProdutos = a;
        //this.showPopover();
        this.isHiddden = false;
        
      },
      e => {
        console.log(e);
      });
    }

  }



  


}

