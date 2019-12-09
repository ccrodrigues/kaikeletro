import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD:icomerce/src/app/app.module.ts
import { RegisterUserComponent } from './register-user/register-user.component';
=======
import { ProdutoUniComponent } from './produto-uni/produto-uni.component';
>>>>>>> 5861aa5d1253d6e08fbadf79ac4b8c401d676518:Ecomerce/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD:icomerce/src/app/app.module.ts
    RegisterUserComponent
=======
    ProdutoUniComponent
>>>>>>> 5861aa5d1253d6e08fbadf79ac4b8c401d676518:Ecomerce/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
