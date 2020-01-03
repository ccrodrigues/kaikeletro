import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {
   handleError(error: Error) {

   //console.error('It happens: ', error);
 }
}