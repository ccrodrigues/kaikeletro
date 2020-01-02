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
      cep: ['', [Validators.required, Validators.min(8), Validators.max(8)]],
      logradouro: ['', [Validators.required, Validators.min(3)]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', [Validators.required, Validators.min(3)]],
      cidade: ['', [Validators.required, Validators.min(3)]],
      estado: ['', [Validators.required, Validators.min(2)]]
    })
  }

  buscarCEP() {
    console.log(this.endForm.value.cep);
    this.viaCep.getEnderecoPorCep(this.endForm.value.cep).subscribe((data) => {
      console.log(data);
      this.objEnd = data;
    },
      error => {
        alert("Cep invalido");
      })
  }

  salvar() {
    if (this.endForm.valid) {

    } else {
      alert("Preencha os dados corretamente")
    }

  }
}
