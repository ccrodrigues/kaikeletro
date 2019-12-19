import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { TelaRegistroComponent } from '../tela-registro/tela-registro.component';
<<<<<<< Updated upstream
=======
import { CarrinhoComponent } from './carrinho/carrinho.component';
>>>>>>> Stashed changes


const routes: Routes = [
  {path : 'teste', component: CarouselComponent},
  {path : 'detalhes', component: ProdutosDetalhesComponent},
  {path : 'pagi',  component : PaginacaoComponent},
<<<<<<< Updated upstream
  {path : 'registro', component : TelaRegistroComponent}
=======
  {path : 'registro', component : TelaRegistroComponent},
  {path : 'carrinho', component: CarrinhoComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
