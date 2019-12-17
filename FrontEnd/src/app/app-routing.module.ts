import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { TelaRegistroComponent } from './telaregistro/telaregistro.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  { path: 'dashboardAdm', loadChildren: './dashboard-adm/dashboard-adm.module#DashboardAdmModule'
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
