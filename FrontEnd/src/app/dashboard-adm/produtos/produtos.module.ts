import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [AdicionarComponent, ListaComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
