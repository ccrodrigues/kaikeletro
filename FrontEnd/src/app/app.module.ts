import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioLoginComponent } from './vendas/usuario-login/usuario-login.component';
import { MsgErroComponent } from './vendas/usuario-login/msg-erro/msg-erro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './layout/vendas/menu/menu.component';
import { HomeModule } from './vendas/home/home.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TelaRegistroComponent } from './vendas/tela-registro/tela-registro.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioLoginComponent,
    MsgErroComponent,
    MenuComponent,
    TelaRegistroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



