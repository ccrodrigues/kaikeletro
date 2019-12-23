import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { HomeComponent } from './home/home.component';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { ProdutosDetalhesComponent } from './produtos/produtos-detalhes/produtos-detalhes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: UsuarioLoginComponent},
  {path:'registro', component: TelaRegistroComponent},    
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'produtos-detalhes/:id', component: ProdutosDetalhesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
