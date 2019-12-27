import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { HomeComponent } from './home/home.component';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { ProdutosDetalhesComponent } from './home/produtos-detalhes/produtos-detalhes.component';
import { PaginacaoComponent } from './home/paginacao/paginacao.component';
import { CarrinhoComponent } from './home/carrinho/carrinho.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: UsuarioLoginComponent},
  {path:'registro', component: TelaRegistroComponent},
  {path: 'detalhes/:id', component: ProdutosDetalhesComponent},
  {path: 'paginacao', component: PaginacaoComponent},
  {path: 'carrinho', component: CarrinhoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
