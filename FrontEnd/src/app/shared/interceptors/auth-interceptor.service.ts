import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  

  constructor(
    private storage: StorageService
    
    ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const helper = new JwtHelperService();
 
    let localUser = this.storage.getLocalUser();
    
    console.log('interceptor jwt works!');

    console.log(localUser);

    if (localUser) {

      let tokenStr = 'Bearer ' + localUser.token;

      /**Decodificando o token e extraindo os parâmetros do payload*/
      const decodedToken = helper.decodeToken(localUser.token);

      const expirationDate = helper.getTokenExpirationDate(localUser.token);
      const isExpired = helper.isTokenExpired(localUser.token);

      console.log(decodedToken);
      console.log(expirationDate);
      console.log(isExpired);

      localUser.email = decodedToken.sub;
      localUser.nome = decodedToken.nome;
      localUser.exp = decodedToken.exp;
      localUser.iat = decodedToken.iat;
      localUser.scopes = decodedToken.scopes.split(',');

      console.log(localUser);

      req = req.clone({

        setHeaders: {
          Authorization: tokenStr
        }
      })
    }

    /*return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.router.navigate(['/login'], { });
          return EMPTY;
          //return throwError(error);
        } else {
          return throwError(error);
        }
      }
    ));*/

    return next.handle(req);

  }

}
