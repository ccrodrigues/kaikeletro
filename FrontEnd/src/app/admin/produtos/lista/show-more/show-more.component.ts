import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input() produto  = [];
  @Output() close   = new EventEmitter();
  imagens           = [];
  ler = new FileReader();
  imagem : File = null;
  valor;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
  }

  fechar() {
    console.log("aqui");
    
    this.close.emit(false)
  }

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
}
