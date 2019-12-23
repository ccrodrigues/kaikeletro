import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioLoginComponent } from './vendas/usuario-login/usuario-login.component';
import { TelaRegistroComponent } from './vendas/tela-registro/tela-registro.component';
import { HomeComponent } from './vendas/home/home.component';
import { VendasModule } from './vendas/vendas.module';

const routes: Routes = [
  { path: '', loadChildren:'./vendas/vendas.module#VendasModule'},
  
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  // , canActivate:[ GuardService]  <=== CANATIVATE para bloquear a entrada do usuario na tela do adm 
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
