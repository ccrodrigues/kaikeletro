import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
<<<<<<< HEAD
  { path: 'dashboardAdm', loadChildren: './dashboard-adm/dashboard-adm.module#DashboardAdmModule'
  // , canActivate:[ GuardService]  <=== CANATIVATE para bloquear a entrada do usuario na tela do adm 
  }
=======
  { path: 'dashboardAdm', loadChildren: './dashboard-adm/dashboard-adm.module#DashboardAdmModule' }

  
>>>>>>> 13f5cf21baeac70ec3b5fecf9fde109db34eaadd
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
