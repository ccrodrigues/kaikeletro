import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdmComponent } from './dashboard-adm/dashboard-adm.component';
<<<<<<< HEAD
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { MsgErroComponent } from './usuario-login/msg-erro/msg-erro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HomeModule } from './home/home.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
>>>>>>> footer-viacep


@NgModule({
  declarations: [
    AppComponent,
    UsuarioLoginComponent,
    MsgErroComponent,
    DashboardAdmComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule
=======
    SharedModule
>>>>>>> footer-viacep
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



