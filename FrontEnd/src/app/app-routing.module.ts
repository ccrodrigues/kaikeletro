import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioLoginComponent } from './vendas/usuario-login/usuario-login.component';
import { TelaRegistroComponent } from './vendas/tela-registro/tela-registro.component';
import { HomeComponent } from './vendas/home/home.component';
import { VendasModule } from './vendas/vendas.module';
import { GuardsService } from './shared/guards/guards.service';

const routes: Routes = [
  { path: 'dashboardAdm', loadChildren: './admin/admin.module#AdminModule'
  //  <=== CANATIVATE para bloquear a entrada do usuario na tela do adm 
  },
  { path: '', loadChildren:'./vendas/vendas.module#VendasModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
