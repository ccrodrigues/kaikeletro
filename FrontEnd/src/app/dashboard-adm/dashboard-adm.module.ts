import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { RouterLinkActive } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosModule } from './produtos/produtos.module';
import { AdicionarComponent } from './adicionar/adicionar.component';


@NgModule({
  declarations: [
    DashboardAdmComponent,
    ProdutosComponent,
    AdicionarComponent
  ],
  imports: [
    CommonModule,
    DashboardAdmRoutingModule,
    ProdutosModule
  ]
})
export class DashboardAdmModule { }
