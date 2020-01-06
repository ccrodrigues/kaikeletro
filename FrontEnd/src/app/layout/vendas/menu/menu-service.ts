import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { Injectable } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';


@Injectable({
    providedIn: 'root'
  })
  export class menuService {
   isDisabled: any;
   loginService: any;
  
   constructor() {
      
   }

 habilitarAdmin(nivel){

    console.log(nivel);

   this.isDisabled = this.loginService.getIsAdmin() && this.loginService.getIsAutenticado();

     if(this.loginService.isAutenticado == true && this.loginService.isAdmin == true){
         this.isDisabled = true;
        }else{
       this.isDisabled = false;
        }
  
         console.log(this.isAdminNivel);


}
   isAdminNivel(isAdminNivel: any) {
      throw new Error("Method not implemented.");
   }
}


  