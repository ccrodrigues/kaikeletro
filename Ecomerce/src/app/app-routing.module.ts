import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path : 'login', component : LoginUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
