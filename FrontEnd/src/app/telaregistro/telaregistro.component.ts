import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

// import { ToastrService } from 'ngx-toastr';
import { ViaCepService } from '../shared/services/via-cep.service';

import { Validacoes } from '../shared/validacoes';
import { Endereco } from '../shared/models/endereco.model';

@Component({
  selector: 'app-telaregistro',
  templateUrl: './telaregistro.component.html',
  styleUrls: ['./telaregistro.component.css']
})
export class TelaRegistroComponent implements OnInit {

  cepModel = '';
  cepMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  regForm : FormGroup;
  searchEndereco : Endereco;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group( 
    { 
      nome : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)] ],
      nascimento: ['', Validators.compose([Validators.required, Validacoes.MaiorQue18Anos])],
      cpf: ['', Validators.compose([Validators.required, Validacoes.validaCpf])],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', Validators.compose([Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      confirmarSenha: ['', Validators.compose([Validators.required])],

      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, Validacoes.cepValidator]],
        numero: ['', Validators.required],
        complemento: [''],
        lougradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
    }
    );
  }

  onSubmit(){
    console.log(this.regForm);
  }

  isErrorCampo(campo){
    return (campo.valid == false && campo.touched == true);
  }
}
