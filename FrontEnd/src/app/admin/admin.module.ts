import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DSProdutosComponent } from './produtos/ds-produtos.component';


@NgModule({
  declarations: [DSProdutosComponent, UsuariosComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
