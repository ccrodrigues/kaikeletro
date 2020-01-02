import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './vendas/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterLayoutComponent } from './vendas/footer-layout/footer-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [MenuComponent, FooterLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    CollapseModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FooterLayoutComponent
  ]
})
export class LayoutModule {
}

