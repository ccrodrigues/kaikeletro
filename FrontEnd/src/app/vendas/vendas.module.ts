import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';


@NgModule({
  declarations: [TelaRegistroComponent],
  imports: [
    CommonModule,
    VendasRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class VendasModule { }
