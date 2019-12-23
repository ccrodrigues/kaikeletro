import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/shared/Services/categorias.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  categorias: any = [];
  showInput: boolean = true;

  constructor(private cs: CategoriasService) { }

  ngOnInit() {
    this.cs.getAll().subscribe(
      a => {
        this.categorias = a;
        console.log(a)
      }
    )
  }


  adicionarCategoria($event) {
    // bloqueia a requição do botão
    $event.preventDefault();
    this.showInput = !this.showInput;
  }
} 
