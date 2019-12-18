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
  
  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
  }

  fechar() {
    console.log("aqui");
    this.close.emit(false)
  }

  getImageAndPut(img) {
    let a = this.ler.readAsDataURL(img.value);
    console.log(a);
  }

  putImage(url) {
    this.imagens.push(url);
  }

}
