import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/toaster/dialog.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './ds-produtos.component.html',
  styleUrls: ['./ds-produtos.component.css']
})
export class DSProdutosComponent implements OnInit {

  constructor(private dialogService : DialogService) { }

  isLista : boolean = true;
 
  ngOnInit() {
    this.dialogService.showSuccess("Olá");
  }


  esconder(boo) {
    console.log()
    this.isLista = boo;
  }
}
