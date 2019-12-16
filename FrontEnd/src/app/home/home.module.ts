import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [ProdutosComponent, CarouselComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,    
    CarouselModule.forRoot()
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
