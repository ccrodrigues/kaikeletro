import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TelaregistroService } from '../tela-registro/tela-registro.service';
import { EnderecoModel } from 'src/app/shared/models/endereco.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao-endereco',
  templateUrl: './confirmacao-endereco.component.html',
  styleUrls: ['./confirmacao-endereco.component.css']
})
export class ConfirmacaoEnderecoComponent implements OnInit {

  endForm: FormGroup;
  objEnd: EnderecoModel;

  constructor(private formBuilder: FormBuilder,
    private localStorage:StorageService,
    private route:Router,
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
    if (this.endForm.valid) {
      this.localStorage.setEndereco(this.objEnd);
      this.route.navigateByUrl("/pagamento")
      
    } else {
      alert("Preencha os dados corretamente")
    }
  }

  
}
