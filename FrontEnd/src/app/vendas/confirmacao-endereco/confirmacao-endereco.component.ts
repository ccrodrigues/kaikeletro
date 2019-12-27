import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirmacao-endereco',
  templateUrl: './confirmacao-endereco.component.html',
  styleUrls: ['./confirmacao-endereco.component.css']
})
export class ConfirmacaoEnderecoComponent implements OnInit {

  endForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
