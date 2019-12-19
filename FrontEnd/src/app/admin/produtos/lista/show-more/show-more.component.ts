import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

<<<<<<< HEAD
  @Input() produto  = [];
  @Output() close   = new EventEmitter();
  imagens           = [];
  ler = new FileReader();
  imagem : File = null;
  valor;

  constructor(private sanitizer : DomSanitizer) { }
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  @Input() produto = [];

  @Output() close = new EventEmitter();

  
  constructor() { }
=======
=======
>>>>>>> Stashed changes
  @Input() produto  = [];
  @Output() close   = new EventEmitter();
  imagens           = [];
  ler = new FileReader();
  imagem : File = null;
  valor;

  constructor(private sanitizer : DomSanitizer) { }
>>>>>>> Stashed changes
>>>>>>> AtualizacaoUsuarios

  ngOnInit() {
  }

  fechar() {
    console.log("aqui");
    
    this.close.emit(false)
  }

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
>>>>>>> AtualizacaoUsuarios
  getImageAndPut(img : any) {
    this.imagem = <File>img.target.files[0];
    this.putImage(img.value);
  }

  putImage(url) {
    let mimetype = this.imagem.type;
    if(mimetype.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.imagem);
    reader.onload = (_event) => {
      this.imagens.push(reader.result);
    }
  }

  lessImage(img) {

    for(let i = 0; 0 < this.imagens.length; i++) {
      if(this.imagens[i] == img) {
        return this.imagens.splice(i, 1)
      }
    }
  }
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> AtualizacaoUsuarios
}
