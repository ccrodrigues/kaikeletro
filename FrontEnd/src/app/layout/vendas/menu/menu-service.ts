import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { Injectable } from '@angular/core';
import { AdminService } from 'src/app/shared/Services/admin.service';
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';


@Injectable({
    providedIn: 'root'
  })
  export class menuService {
    administrador;
    isAdminNivel : boolean;
    isNiveldeAcesso1: boolean;
    isNiveldeAcesso2: boolean;
    isDisabled : boolean = false;
  
   constructor(private http: HttpClient, private envService: EnvService
    , private adminService : AdminService, private loginService : ServiceLoginService) {
      
   }

 habilitarAdmin(nivel){

    console.log(nivel);

   // this.isDisabled = this.loginService.getIsAdmin() && this.loginService.getIsAutenticado();

    // if(this.loginService.isAutenticado == true && this.loginService.isAdmin == true){
    //      this.isDisabled = true;
    //     }else{
    //   this.isDisabled = false;
    //    }
  
         console.log(this.isAdminNivel);


}
}


  