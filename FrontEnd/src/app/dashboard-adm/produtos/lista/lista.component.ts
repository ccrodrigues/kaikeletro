import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  isShowMore : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showMore(prod) {
    this.isShowMore = true;
  }
} 
