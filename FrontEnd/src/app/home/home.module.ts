import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{FormsModule} from '@angular/forms'
import { HomeRoutingModule } from './home-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProdutosComponent, CarouselComponent, HomeComponent, ProdutosDetalhesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    FormsModule,
    CarouselModule.forRoot(),
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }