import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DSProdutosComponent } from './produtos/ds-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowMoreComponent } from './produtos/lista/show-more/show-more.component';
import { ListaComponent } from './produtos/lista/lista.component';
import { DeletarProdutoComponent } from './produtos/lista/deletar-produto/deletar-produto.component';
<<<<<<< HEAD
import { ShowMoreComponent } from './produtos/lista/show-more/show-more.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { AdicionarComponent } from './produtos/adicionar/adicionar.component';
>>>>>>> f39370d0757065366f0d6978ba37ee6630f5a4c4


@NgModule({
  declarations: [
    AdminComponent, 
    DSProdutosComponent,
    ShowMoreComponent,
    ListaComponent,
    DeletarProdutoComponent,
    AdicionarComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
