import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { VendasModule } from './vendas/vendas.module';
import { LayoutModule } from './layout/layout.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    //CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    VendasModule,
    LayoutModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



