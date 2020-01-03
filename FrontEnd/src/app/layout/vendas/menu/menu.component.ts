import { Component, OnInit, ViewChild } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';

import { Popover } from 'ngx-popover';
import { isNull } from 'util';
=======
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ProdutosCategoriaComponent } from 'src/app/vendas/produtos-categoria/produtos-categoria.component';
import { ProdutosService } from 'src/app/shared/services/produtos.service';
import { VendasModule } from 'src/app/vendas/vendas.module';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
>>>>>>> 6cae8f8ca32a22efa6f5af11fd679d31b37a421b


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild("myPopover", {static:true}) myPopover : Popover;

   isCollapsed = false;
   isAuth : boolean ;
   isDashboard : boolean = false;
<<<<<<< HEAD
   tooltipProdutos : ProdutoModel [] ;

   isHiddden = true;
 


  constructor(private menuService : menuService, private loginService : ServiceLoginService
   ,private router: Router,
   private produtoService : ProdutosService ) { }
=======
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
>>>>>>> 6cae8f8ca32a22efa6f5af11fd679d31b37a421b

  ngOnInit() {

    let localUser = this.storage.getLocalUser();
    //console.log(localUser)
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



  


  sair(){
    this.deslogar = this.loginService.logout();
    this.dialogService.showSuccess('Logout feito com sucesso!');
  }
  
}

