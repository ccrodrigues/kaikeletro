import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StorageService } from './shared/services/storage.service';

import { Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FrontEnd';
  isAuth : boolean = true;

  constructor(
    private router: Router,
    private storage : StorageService,
    private _compiler: Compiler
  ) {
    this._compiler.clearCache();
   }

  headerFooter;

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.headerFooter = (event.url !== '/login')
        }
      });

     


}

}

