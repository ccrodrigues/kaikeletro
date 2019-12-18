import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from '../layout/footer-layout/footer-layout.component';
import { MsgErroComponent } from './erro/msg-erro/msg-erro.component';



@NgModule({
  declarations: [MsgErroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MsgErroComponent
  ]

})

export class SharedModule { }
