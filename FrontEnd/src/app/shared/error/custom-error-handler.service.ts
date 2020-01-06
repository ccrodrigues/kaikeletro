import { Injectable, ErrorHandler } from '@angular/core';
import { DialogService } from '../toaster/dialog.service';

@Injectable({
 providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {
   handleError(error: Error) {

   console.error('It happens: ', error);
 }
}