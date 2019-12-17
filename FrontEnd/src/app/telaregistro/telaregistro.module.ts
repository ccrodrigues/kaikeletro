import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaRegistroComponent } from './telaregistro.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TelaRegistroComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TelaRegistroModule { }
