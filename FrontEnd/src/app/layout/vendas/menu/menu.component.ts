import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/guards/auth.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   isCollapsed = false;
   isAuth : boolean = false;

  constructor(
    private authService : AuthService,
    private dialogService : DialogService) { }

  ngOnInit() {

    this.isAuth = this.authService.isAutenticado();
   
  }

  // isAuthInverter(){
  //   this.isAuth = !this.isAuth;
  // }

  sair(){
    this.isAuth = this.authService.logout();
    this.dialogService.showSuccess('Logout feito com sucesso!');
  }

}
