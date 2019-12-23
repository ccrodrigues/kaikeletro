import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input() produto : any  = [];
  @Output() close   = new EventEmitter();
  imagens           = [];
  imagem : File     = null;
  ler = new FileReader();
  valor;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.imagens = this.produto.imagens;
    console.log(this.imagens)
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
      console.log("=========>>>" + this.imagens)
    }
  }

  lessImage(img) {


    for(let i = 0; 0 < this.imagens.length; i++) {
      if(this.imagens[i].imagemProduto == img || this.imagens[i] == img) {
        return this.imagens.splice(i, 1)
      }
    }
  }

  verificarImagem( imgs )  {
    return typeof imgs === 'string'
  }
}
