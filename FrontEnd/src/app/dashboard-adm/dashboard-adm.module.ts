import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdmRoutingModule } from './dashboard-adm-routing.module';
import { DashboardAdmComponent } from './dashboard-adm.component';


@NgModule({
  declarations: [
    DashboardAdmComponent
  ],
  imports: [
    CommonModule,
    DashboardAdmRoutingModule
  ]
})
export class DashboardAdmModule { }
