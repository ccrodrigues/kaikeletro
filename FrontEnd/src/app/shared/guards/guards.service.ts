import { Injectable } from '@angular/core';
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  constructor(private serviceLogin : ServiceLoginService, private router : Router) { }

  canActivate(){

    let serviceLogin = this.serviceLogin.getIsAutenticado() 
    && this.serviceLogin.getIsAdmin();

    if(serviceLogin == false){

      this.router.navigate(['login']);

    }
    return serviceLogin;

  }

  }

