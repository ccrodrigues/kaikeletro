import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterUserComponent } from './register-user/register-user.component';
import { ProdutoUniComponent } from './produto-uni/produto-uni.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent, 
    ProdutoUniComponent, 
    TesteComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
