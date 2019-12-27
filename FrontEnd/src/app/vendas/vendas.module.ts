import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { HomeComponent } from './home/home.component';
import { PaginacaoComponent } from './home/paginacao/paginacao.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { ProdutosDetalhesComponent } from './home/produtos-detalhes/produtos-detalhes.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CarouselComponent } from './home/carousel/carousel.component';
import { MelhoresOfertasComponent } from './home/melhores-ofertas/melhores-ofertas.component';
import { MaisVendidosComponent } from './home/mais-vendidos/mais-vendidos.component';
import { MaisDesejadosComponent } from './home/mais-desejados/mais-desejados.component';
import { CarrinhoComponent } from './home/carrinho/carrinho.component';
import { ConfirmacaoEnderecoComponent } from './confirmacao-endereco/confirmacao-endereco.component';
import { PagamentoFinalizacaoComponent } from './pagamento-finalizacao/pagamento-finalizacao.component';


@NgModule({
  declarations: [TelaRegistroComponent, UsuarioLoginComponent, HomeComponent, TelaRegistroComponent,
     UsuarioLoginComponent, PaginacaoComponent, ProdutosComponent, ProdutosDetalhesComponent,CarouselComponent, 
     MelhoresOfertasComponent, MaisVendidosComponent, MaisDesejadosComponent,CarrinhoComponent, 
     ConfirmacaoEnderecoComponent, PagamentoFinalizacaoComponent],
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
    PaginacaoComponent,
    ProdutosComponent,
    TelaRegistroComponent,
    UsuarioLoginComponent,
    HomeComponent,
    ProdutosDetalhesComponent,
    CarrinhoComponent,
    ConfirmacaoEnderecoComponent,
    PagamentoFinalizacaoComponent
    //CarouselComponent
  ]
})
export class VendasModule { }
