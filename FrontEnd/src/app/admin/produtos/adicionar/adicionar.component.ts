import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/shared/Services/categorias.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  select            : any               ;
  selecionadas      : any     = []      ;
  categorias        : any     = []      ;
  showInput         : boolean = true    ;
  add               : boolean = false   ;
  remove            : boolean = false   ;
  pesquisado                  = []      ;
  userPesquisando             = false   ;

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

  search(search) {
    let cat = search.value.toUpperCase();
    if(cat != "") {

      
      let arr = 0;
      for(let x =0; x < this.categorias.length; x++) {
        if(this.categorias[x].nome.toUpperCase().indexOf(cat) >= 0) {
          this.pesquisado[arr] = this.categorias[x];
          arr++;
        }
      }

      this.userPesquisando = true;

    } else {
      this.pesquisado = [];
      this.userPesquisando = false;

    }
  }

  selecionada(campo) {
    this.select = campo.value;
    this.add = true;
  }
  showAddCategoria($event) {
    $event.preventDefault();
    this.selecionadas[this.selecionadas.length] = this.select;
    this.add = false;
  }

  selectForRemove() {
    this.remove = true;
  }

  removeWhat($event, removeThis) {
    $event.preventDefault();
    console.log(removeThis);
  }

} 
