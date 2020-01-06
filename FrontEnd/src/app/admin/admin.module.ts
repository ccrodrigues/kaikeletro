import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DSProdutosComponent } from './produtos/ds-produtos.component';
import { ShowMoreComponent } from './produtos/lista/show-more/show-more.component';
import { ListaComponent } from './produtos/lista/lista.component';
import { DeletarProdutoComponent } from './produtos/lista/deletar-produto/deletar-produto.component';
import { AdicionarComponent } from './produtos/adicionar/adicionar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDetalhesComponent } from './usuarios/usuario-detalhes/usuario-detalhes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent, 
    DSProdutosComponent,
    ShowMoreComponent,
    ListaComponent,
    DeletarProdutoComponent,
    AdicionarComponent,
    PedidosComponent,
    UsuariosComponent,
    UsuarioDetalhesComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,    
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule    
  ]
})
export class AdminModule { }
