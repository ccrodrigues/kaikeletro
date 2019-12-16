import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TelaRegistroComponent } from './telaregistro/telaregistro.component';


const routes: Routes = [
  { path : '', component : HomeComponent },
  { path: 'dashboardAdm', loadChildren: './dashboard-adm/dashboard-adm.module#DashboardAdmModule' },
  { path : 'registro', component: TelaRegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
