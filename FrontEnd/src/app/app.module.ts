import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { VendasModule } from './vendas/vendas.module';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';


import { ProdutosComponent } from './vendas/home/produtos/produtos.component';
import { HomeComponent } from './vendas/home/home.component';
import { DialogService } from './shared/toaster/dialog.service';
import { Toast, ToastrService, ToastrModule } from 'ngx-toastr';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AuthInterceptorService } from './shared/interceptors/auth-interceptor.service';
import { HttpConfigInterceptor } from './shared/interceptors/http-config-interceptor.service';
import { CustomErrorHandlerService } from './shared/error/custom-error-handler.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    //VendasModule,
    LayoutModule,
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



