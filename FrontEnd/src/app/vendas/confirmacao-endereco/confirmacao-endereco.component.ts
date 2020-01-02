import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TelaregistroService } from '../tela-registro/tela-registro.service';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-confirmacao-endereco',
  templateUrl: './confirmacao-endereco.component.html',
  styleUrls: ['./confirmacao-endereco.component.css']
})
export class ConfirmacaoEnderecoComponent implements OnInit {

  endForm: FormGroup;
  objEnd: Endereco;

  constructor(private formBuilder: FormBuilder,
    private viaCep: TelaregistroService) { }

  ngOnInit() {
    this.endForm = this.formBuilder.group({
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', [Validators.required ]],
      cidade: ['', [Validators.required ]],
      estado: ['', [Validators.required] ]
    })
  }

  buscarCEP() {
    this.viaCep.getEnderecoPorCep(this.endForm.value.cep).subscribe((data) => {
      this.objEnd = data;
    },
      error => {
        alert("Cep invalido");
      })
  }

  salvar() {
    console.log(this.endForm.valid);
    if (this.endForm.valid) {

    } else {
      alert("Preencha os dados corretamente")
    }

  }
}
