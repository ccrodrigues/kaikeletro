import { Component, OnInit, Input } from '@angular/core';

import { Endereco } from '../models/endereco.model'

@Component({
  selector: 'app-cep-detalhes',
  templateUrl: './cep-detalhes.component.html',
  styleUrls: ['./cep-detalhes.component.css']
})
export class CepDetalhesComponent implements OnInit {

  @Input() endereco : Endereco; 

  constructor() { }

  ngOnInit() {
  }

}
