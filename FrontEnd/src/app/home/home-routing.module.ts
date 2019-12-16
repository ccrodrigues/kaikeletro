import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {path : 'teste', component: CarouselComponent},
  {path : 'detalhes', component: ProdutosDetalhesComponent},
  {path : 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
