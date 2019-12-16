import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdmComponent } from './dashboard-adm/dashboard-adm.component';
import { HomeComponent } from './home/home.component';
import { AdicionarComponent } from './dashboard/adicionar/adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
