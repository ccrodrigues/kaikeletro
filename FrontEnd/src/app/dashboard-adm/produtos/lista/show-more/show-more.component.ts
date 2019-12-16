import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input() produto = [];

  @Output() close = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }

  fechar() {
    console.log("aqui");
    this.close.emit(false)
  }

}
