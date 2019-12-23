import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { HomeComponent } from './home/home.component';
import { PaginacaoComponent } from './produtos/paginacao/paginacao.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { ProdutosDetalhesComponent } from './produtos/produtos-detalhes/produtos-detalhes.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CarouselComponent } from './home/carousel/carousel.component';
import { MelhoresOfertasComponent } from './produtos/melhores-ofertas/melhores-ofertas.component';
import { MaisVendidosComponent } from './produtos/mais-vendidos/mais-vendidos.component';
import { MaisDesejadosComponent } from './produtos/mais-desejados/mais-desejados.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    TelaRegistroComponent,
    UsuarioLoginComponent,
    HomeComponent,
    TelaRegistroComponent,
    UsuarioLoginComponent,
    PaginacaoComponent,
    ProdutosComponent,
    ProdutosDetalhesComponent,
    CarouselComponent,
    MelhoresOfertasComponent,
    MaisVendidosComponent,
    MaisDesejadosComponent,
    CarrinhoComponent
  ],
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
    NgxPaginationModule,
    CarouselModule,
  ],
  exports:[
    // PaginacaoComponent,
    // ProdutosComponent,
    // TelaRegistroComponent,
    // UsuarioLoginComponent,
    // HomeComponent,
    // ProdutosDetalhesComponent,
    // CarrinhoComponent
    
  ]
})
export class VendasModule { }
