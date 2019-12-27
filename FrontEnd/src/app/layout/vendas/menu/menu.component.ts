import { Component, OnInit } from '@angular/core';
import { menuService } from './menu-service'
import { ServiceLoginService } from 'src/app/vendas/usuario-login/service-login/service-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   isCollapsed = false;
   isAuth : boolean = true;
   isDashboard : boolean = false;
 


  constructor(private menuService : menuService, private loginService : ServiceLoginService
   ,private router: Router ) { }

  ngOnInit() {
     
    this.isAuth = this.loginService.getIsAutenticado();
        if(this.isAuth == false){
           this.loginService.Logout();
         }
   
  }
  logadoAdmin(){
      this.isDashboard = this.loginService.getIsAdmin() && this.loginService.getIsAutenticado();

      return this.isDashboard;
         
  }


}

