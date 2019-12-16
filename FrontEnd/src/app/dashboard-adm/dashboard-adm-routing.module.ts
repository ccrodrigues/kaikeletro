import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: DashboardAdmComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'usuarios', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdmRoutingModule { }
