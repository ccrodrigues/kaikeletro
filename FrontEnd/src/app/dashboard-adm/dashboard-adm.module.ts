import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { DSProdutosComponent } from './produtos/ds-produtos.component';
import { ProdutosModule } from './produtos/ds-produtos.module';
import { AdicionarComponent } from './produtos/adicionar/adicionar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    DashboardAdmComponent,
    DSProdutosComponent,
    AdicionarComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardAdmRoutingModule,
    ProdutosModule
  ]
})
export class DashboardAdmModule { }
