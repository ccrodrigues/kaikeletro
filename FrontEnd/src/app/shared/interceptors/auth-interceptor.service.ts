import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private storage: StorageService
    
    ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let localUser = this.storage.getLocalUser();
    
    //console.log('interceptor jwt works!');

    //console.log(localUser);

    //console.log(req);

    let url = req.url;

    

    if (localUser) {

      let tokenStr = 'Bearer ' + localUser.token;

      if (!url.includes('viacep')){

        req = req.clone({

          setHeaders: {
            Authorization: tokenStr
          }
        });

      }

      
    }



   return next.handle(req);

 }

}