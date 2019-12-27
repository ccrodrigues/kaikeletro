import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErroComponent } from './erro/msg-erro/msg-erro.component';
import { TooltipDirective } from './directives/tooltip.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MsgErroComponent, TooltipDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MsgErroComponent,
    TooltipDirective
  ]
})

export class SharedModule { }
