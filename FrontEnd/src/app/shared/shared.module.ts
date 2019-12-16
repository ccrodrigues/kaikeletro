import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';



@NgModule({
  declarations: [FooterLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterLayoutComponent
  ]
})
export class SharedModule { }
