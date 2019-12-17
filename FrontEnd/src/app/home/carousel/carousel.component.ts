import { Component, OnInit, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent implements OnInit {
  
  @Input() slides ; 
  constructor() { }

  ngOnInit() {
    if(this.slides == null || this.slides == undefined || this.slides == ""){
     this.slides= [
        {image: 'assets/images/peomo.png'},
        {image: 'assets/images/pic2.jpg'},
        {image: 'assets/images/pic3.png'},
      ];
    }
  }

}
