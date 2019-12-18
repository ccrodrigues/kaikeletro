import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DSProdutosComponent } from './produtos/ds-produtos.component';
import { RouterModule } from '@angular/router';
import { ListaComponent } from './produtos/lista/lista.component';
import { AdicionarComponent } from './produtos/adicionar/adicionar.component';
import { DeletarProdutoComponent } from './produtos/lista/deletar-produto/deletar-produto.component';
import { ShowMoreComponent } from './produtos/lista/show-more/show-more.component';


@NgModule({
  declarations: [
    AdminComponent, 
    DSProdutosComponent,
    AdicionarComponent,
    ListaComponent,
    DeletarProdutoComponent,
    ShowMoreComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
