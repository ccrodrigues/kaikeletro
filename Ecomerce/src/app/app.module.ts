import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterUserComponent } from './register-user/register-user.component';
import { ProdutoUniComponent } from './produto-uni/produto-uni.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
     
    ProdutoUniComponent, 
    TesteComponenteComponent, 
    LoginUsuarioComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
