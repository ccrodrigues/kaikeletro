import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardsService } from './shared/guards/guards.service';

const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  , canActivate:[ GuardsService]  
  //  <=== CANATIVATE para bloquear a entrada do usuario na tela do adm 
  },
  { path: '', loadChildren:'./vendas/vendas.module#VendasModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
