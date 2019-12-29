import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { VendasModule } from './vendas/vendas.module';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthInterceptorService } from './shared/interceptors/auth-interceptor.service';
import { HttpConfigInterceptor } from './shared/interceptors/http-config-interceptor.service';
import { CustomErrorHandlerService } from './shared/services/error/custom-error-handler.service';


export function tokenGetter() {
  return localStorage.getItem("localUser");
}

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
    HttpClientModule,

    CollapseModule.forRoot(),
    BrowserAnimationsModule,    
    ToastrModule.forRoot(),
    //PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),

    SharedModule,
    

    VendasModule,
    LayoutModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:8080", "cursos.grandeporte.com;br"],
        blacklistedRoutes: ["exemplo.com.br/examplobadroute/"]
      }
    })
    //fim JWT Module
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
    ,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpConfigInterceptor, 
      multi: true
    }
    ,
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



