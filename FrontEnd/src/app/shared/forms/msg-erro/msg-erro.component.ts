import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msg-erro',
  templateUrl: './msg-erro.component.html',
  styleUrls: ['./msg-erro.component.css']
})
export class MsgErroComponent implements OnInit {

  @Input() mensagem : string;
  @Input() isError : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
