import { Component, OnInit } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   isCollapsed = false;
   isAuth : boolean = true;
   isDashboard : boolean = false;
 


  constructor(private menuService : menuService, 
    private loginService : ServiceLoginService
   ,private router: Router,
   private storage : StorageService,
   private authService : AuthServiceService ) { }

  ngOnInit() {

    if(this.storage.getLocalUser()!=null){
      this.isAuth = true;
    }else{
      this.isAuth = false;
    }

     
    this.isAuth = this.loginService.getIsAutenticado();
        if(this.isAuth == false){
           this.loginService.Logout();
         }
   
  }

  logadoAdmin(){
      this.isDashboard = this.loginService.getIsAdmin() && this.loginService.getIsAutenticado();

      return this.isDashboard;
         
  }

  sair(){
    this.loginService.Logout()
    this.isAuth = false;
    this.isDashboard = false;
    console.log(this.isDashboard)
  }


}

