import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUserRoutingModule } from './register-user-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user.component';


@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegisterUserRoutingModule
  ]
})
//sadjdamdçl
export class RegisterUserModule { }
