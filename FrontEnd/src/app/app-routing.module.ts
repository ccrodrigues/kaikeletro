import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioLoginComponent } from './vendas/usuario-login/usuario-login.component';
import { TelaRegistroComponent } from './vendas/tela-registro/tela-registro.component';
import { HomeComponent } from './vendas/home/home.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  { path: 'dashboardAdm', loadChildren: './admin/admin.module#AdminModule'
  // , canActivate:[ GuardService]  <=== CANATIVATE para bloquear a entrada do usuario na tela do adm 
  },
  { path : 'login', component : UsuarioLoginComponent},
  { path : 'registro', component: TelaRegistroComponent },
  { path: 'usuarios', loadChildren:'./usuario/usuario.module#UsuarioModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
