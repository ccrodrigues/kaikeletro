import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErroComponent } from './erro/msg-erro/msg-erro.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MsgErroComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MsgErroComponent

  ]
})

export class SharedModule { }
