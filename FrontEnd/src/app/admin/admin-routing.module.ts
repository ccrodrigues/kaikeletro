import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DSProdutosComponent } from './produtos/ds-produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDetalhesComponent } from './usuarios/usuario-detalhes/usuario-detalhes.component';


const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'produtos', component: DSProdutosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/:id', component: UsuarioDetalhesComponent },
  { path: 'usuarios/novo', component: UsuarioDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
