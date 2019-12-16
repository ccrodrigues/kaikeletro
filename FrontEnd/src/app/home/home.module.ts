import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [ProdutosComponent,HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
