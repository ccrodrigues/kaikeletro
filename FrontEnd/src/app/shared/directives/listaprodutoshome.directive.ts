import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ProdutoModel } from '../models/produto.model';

@Directive({
  selector: '[appListaprodutoshome]'
})
export class ListaprodutoshomeDirective {


  @Input() tooltipTitle : HTMLDivElement;
  @Input() placement: string;
  @Input() delay: number;
  //tooltip: HTMLElement;


  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.show();
  }

  @HostListener('mouseenter') input() {
    if (!this.tooltipTitle) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipTitle) { this.hide(); }
  }
    
  show() {
    if (this.tooltipTitle){
      //this.create();
      this.setPosition();
      this.renderer.addClass(this.tooltipTitle, 'ng-tooltip-show');
    }
    
  }

  hide() {
    this.renderer.removeClass(this.tooltipTitle, 'ng-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltipTitle);
      this.tooltipTitle = null;
    }, this.delay);
  }

  // create() {

  //   console.log(this.tooltipTitle)

  //   if (this.tooltipTitle){

  //     this.tooltipTitle.forEach(element => {
  //       this.tooltip = this.renderer.createElement('span');
  
  //       this.renderer.appendChild(
  //         this.tooltip,
  //         this.renderer.createText(element.nome) 
  //         // textNode
  //       );
  
  //     });

  //     this.renderer.appendChild(document.body, this.tooltip);
  //     // this.renderer.appendChild(this.el.nativeElement, this.tooltip);
  
  //     this.renderer.addClass(this.tooltip, 'ng-tooltip');
  //     this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);
  
  //     // delay 
  //     this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
  //     this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
  //     this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
  //     this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);

  //   }

  // }

  setPosition() {
 
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    const tooltipPos = this.tooltipTitle.getBoundingClientRect();

    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    this.renderer.setStyle(this.tooltipTitle, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltipTitle, 'left', `${left}px`);
  }


}
