import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/shared/Services/categorias.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  categorias = [];

  constructor(private cs : CategoriasService) { }

  ngOnInit() {
    this.cs.getAll()
  }

}
