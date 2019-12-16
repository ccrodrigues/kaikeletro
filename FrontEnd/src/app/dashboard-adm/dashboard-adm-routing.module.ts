import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdmComponent } from './dashboard-adm.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaComponent } from './produtos/lista/lista.component';
import { AdicionarComponent } from './produtos/adicionar/adicionar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: DashboardAdmComponent },
  { path: 'produtos', component: ProdutosComponent,  
    children: [ {
      path: '',
      component: ListaComponent,
      outlet: 'list'
    },{
      path: '',
      component: AdicionarComponent,
      outlet: 'add'
    }] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdmRoutingModule { }
