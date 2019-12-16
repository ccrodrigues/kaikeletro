import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DashboardAdmComponent } from './dashboard-adm/dashboard-adm.component';
import { HomeComponent } from './home/home.component';
import { AdicionarComponent } from './dashboard/adicionar/adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarComponent
=======
import { HomeModule } from './home/home.module';
import { CarouselComponent } from './home/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent
>>>>>>> 13f5cf21baeac70ec3b5fecf9fde109db34eaadd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
