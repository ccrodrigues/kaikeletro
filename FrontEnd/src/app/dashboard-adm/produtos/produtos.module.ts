import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { ShowMoreComponent } from './lista/show-more/show-more.component';



@NgModule({
  declarations: [ListaComponent, ShowMoreComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent
  ]
})
export class ProdutosModule { }
