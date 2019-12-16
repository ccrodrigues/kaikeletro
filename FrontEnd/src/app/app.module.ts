import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardAdmComponent } from './dashboard-adm/dashboard-adm.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TelaRegistroComponent } from './telaregistro/telaregistro.component';
import { MsgErroComponent } from './shared/forms/msg-erro/msg-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelaRegistroComponent,
    MsgErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
