import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/guards/auth.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { StorageService } from 'src/app/shared/services/storage.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //@ViewChild("tooltipProdutos" , {static:false}) tooltipProdutos;

   isCollapsed = false;
   isAuth : boolean = false;
   nomeCliente : string = '';

   tooltipProdutos : ProdutoModel [] ;

  constructor(
    private authService : AuthService,
    private dialogService : DialogService,
    private produtoService : ProdutoService,
    private storageService : StorageService) { }

  ngOnInit() {

    let localUser = this.storageService.getLocalUser();
    console.log(localUser)
    this.nomeCliente = (localUser ? localUser.nome : '' );
    this.isAuth = this.authService.isAutenticado();
   
  }

  sair(){
    this.isAuth = this.authService.logout();
    this.dialogService.showSuccess('Logout feito com sucesso!');
  }

  buscarProdutos(nomeProduto){
    this.produtoService.getProdutoNome(nomeProduto.value).subscribe(
      a => { 
        console.log(a);
        this.tooltipProdutos = a;
      },
      e => {
        console.log(e);
      });

  }

}
