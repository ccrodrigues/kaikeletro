import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { MsgErroComponent } from './forms/msg-erro/msg-erro.component';



@NgModule({
  declarations: [FooterLayoutComponent, MsgErroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterLayoutComponent,
    MsgErroComponent
  ]

})

export class SharedModule { }
