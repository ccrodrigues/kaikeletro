import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErroComponent } from './erro/msg-erro/msg-erro.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldDebugComponent } from './debug/field-debug/field-debug.component';

@NgModule({
  declarations: [MsgErroComponent, FieldDebugComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MsgErroComponent,
    FieldDebugComponent

  ]
})

export class SharedModule { }
