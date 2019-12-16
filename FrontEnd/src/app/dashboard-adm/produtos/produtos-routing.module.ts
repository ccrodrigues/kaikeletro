import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'lista', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
