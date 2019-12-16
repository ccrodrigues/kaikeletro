import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaRegistroComponent } from './telaregistro.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MsgErroComponent } from '../shared/forms/msg-erro/msg-erro.component';


@NgModule({
  declarations: [TelaRegistroComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TelaRegistroModule { }
