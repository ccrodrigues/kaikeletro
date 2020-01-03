import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DialogService } from '../toaster/dialog.service';
import { ErrorInterceptorModel } from '../models/error-interceptor.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {


    constructor(public dialog: DialogService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                //console.log('event--->>> ERROR');
                
                let data: ErrorInterceptorModel;
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status

                };

                if (error instanceof HttpErrorResponse && error.status === 401) {
                    this.router.navigate(['/login'], {});
                    this.dialog.showError('Email ou senha inválidos!!');
                    //return EMPTY;
                    //return throwError(error);
                }
                else {
                    this.dialog.showErrorInterceptor(data);
                }


                return EMPTY;
                //return throwError(error);
            }));
    }
}
