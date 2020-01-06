import { Injectable } from '@angular/core';
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
import { DialogService } from '../toaster/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  constructor(
    private serviceLogin : ServiceLoginService, 
    private router : Router,
    private dialogService : DialogService) { }

  canActivate(){    
    let serviceLogin = this.serviceLogin.isAutenticado() && this.serviceLogin.isAdmin();

    if(!serviceLogin){

      this.dialogService.showError("Acesso não autorizado");
      
      this.router.navigate(['login']); 

    }

    return serviceLogin;

  }

  }

