import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterLinkActive } from '@angular/router';
import { ProdutosRoutingModule } from './produtos/produtos-routing.module';


@NgModule({
  declarations: [
    DashboardAdmComponent,
    ProdutosComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardAdmRoutingModule,
    ProdutosRoutingModule
  ]
})
export class DashboardAdmModule { }
