import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  { path: 'dashboardAdm', loadChildren: './dashboard-adm/dashboard-adm.module#DashboardAdmModule' },
  { path : 'login', component : UsuarioLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
