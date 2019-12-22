import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ErrorInterceptorModel } from '../models/error-interceptor.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private toastr: ToastrService) { }

  showSuccess(msg : string) {
    this.toastr.success(msg);
  }

  showError(msg : string) {
    this.toastr.error(msg);
  }

  showErrorInterceptor(msg : ErrorInterceptorModel ) {
    this.toastr.error(
      `Motivo : ${msg.reason} - Status : ${msg.status}`
    );
  }

  
}
