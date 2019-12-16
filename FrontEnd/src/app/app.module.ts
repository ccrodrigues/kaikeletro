import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CarouselComponent } from './home/carousel/carousel.component';
import { DashboardAdmComponent } from './dashboard-adm/dashboard-adm.component';
import { HomeComponent } from './home/home.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { MsgErroComponent } from './usuario-login/msg-erro/msg-erro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

=======
import { MenuComponent } from './menu/menu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
>>>>>>> 2436b002ebd1bc87d45e5db5b31c2be4d0fd5f55

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    UsuarioLoginComponent,
    MsgErroComponent,
    CarouselComponent,
    DashboardAdmComponent
    
=======
    MenuComponent
>>>>>>> 2436b002ebd1bc87d45e5db5b31c2be4d0fd5f55
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    HomeModule
>>>>>>> 2436b002ebd1bc87d45e5db5b31c2be4d0fd5f55
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



