import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field-debug',
  templateUrl: './field-debug.component.html',
  styleUrls: ['./field-debug.component.css']
})
export class FieldDebugComponent implements OnInit {

  @Input() variavel;

  constructor() { }

  ngOnInit() {
  }

}
