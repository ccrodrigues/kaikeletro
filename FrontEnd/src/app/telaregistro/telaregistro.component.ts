import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

import { Validacoes } from '../shared/validacoes';
import { Endereco } from '../shared/models/endereco.model';
import { TelaregistroService } from './telaregistro.service';

@Component({
  selector: 'app-telaregistro',
  templateUrl: './telaregistro.component.html',
  styleUrls: ['./telaregistro.component.css']
})
export class TelaRegistroComponent implements OnInit {

  cepModel = '';
  cepMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  regForm : FormGroup;
  objEnd : Endereco = null;


  constructor(private formBuilder : FormBuilder,
              private viaCep : TelaregistroService) { }


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
      confirmarSenha: ['', Validators.compose([Validators.required]), Validacoes.SenhasCombinam],

      endereco: this.formBuilder.group({
        cep: ['', [Validators.required]],
        numero: ['', Validators.required],
        complemento: [''],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
    }
    );
  }

  somenteNumerosCep(e: any) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
  
    if (charCode != 8 && charCode != 9) {
      // charCode 48 equivale a 0   
      // charCode 57 equivale a 9
      let max = 8;    
  
      if ((charCode < 48 || charCode > 57)||(e.target.value.length >= max)) return false;
    }
  }

  somenteNumerosCpf(e: any) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
  
    if (charCode != 8 && charCode != 9) {
      // charCode 48 equivale a 0   
      // charCode 57 equivale a 9
      let max = 11;    
  
      if ((charCode < 48 || charCode > 57)||(e.target.value.length >= max)) return false;
    }
  }

  buscarCep(cep){
    console.log("Evento do botão funcionando");
    console.log(cep);
    this.viaCep.getEnderecoPorCep(cep).subscribe( (data) => {
      console.log(data);
      this.objEnd = data;
    }
    )
  }

  onSubmit(){
    console.log(this.regForm);
  }

  isErrorCampo(campo){
    return (campo.valid == false && campo.touched == true);
  }
}