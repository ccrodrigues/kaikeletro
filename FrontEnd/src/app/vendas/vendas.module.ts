import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginacaoComponent } from './home/paginacao/paginacao.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { ProdutosDetalhesComponent } from './home/produtos-detalhes/produtos-detalhes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TelaRegistroComponent, UsuarioLoginComponent, HomeComponent, TelaRegistroComponent,
     UsuarioLoginComponent, PaginacaoComponent, ProdutosComponent, ProdutosDetalhesComponent],
  imports: [
    CommonModule,
    VendasRoutingModule,
    //BrowserModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    PaginacaoComponent,
    ProdutosComponent,
    TelaRegistroComponent,
    UsuarioLoginComponent,
    HomeComponent,
    ProdutosDetalhesComponent,
    //CarouselComponent
  ]
})
export class VendasModule { }
