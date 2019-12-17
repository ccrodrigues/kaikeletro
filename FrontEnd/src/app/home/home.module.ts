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
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProdutosComponent, CarouselComponent, HomeComponent, ProdutosDetalhesComponent, PaginacaoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HomeRoutingModule, 
    FormsModule,
    CarouselModule.forRoot(),
    SharedModule,
    NgxPaginationModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
