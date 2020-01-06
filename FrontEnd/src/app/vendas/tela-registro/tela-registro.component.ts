import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

import { Validacoes } from '../../shared/validacoes';
import { EnderecoModel } from '../../shared/models/endereco.model';
import { TelaregistroService } from './tela-registro.service';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { ServiceLoginService } from '../usuario-login/service-login/service-login.service';

@Component({
  selector: 'app-telaregistro',
  templateUrl: './tela-registro.component.html',
  styleUrls: ['./tela-registro.component.css']
})
export class TelaRegistroComponent implements OnInit {

  regForm: FormGroup;
  objEnd: EnderecoModel;
  registro: FormGroup;

  logradouro: any;
  estado: any;
  bairro: any;
  cidade: any;


  constructor(private formBuilder: FormBuilder,
    private viaCep: TelaregistroService,
    private usuarioService: UsuarioService,
    private dialogService: DialogService,
    private serviceLoginService : ServiceLoginService) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
        nascimento: ['', [Validators.compose([Validators.required])]],
        cpf: ['', [Validators.compose([Validators.required])]],
        telefone: ['',],
        celular: ['', [Validators.required]],
        email: ['', [Validators.required]],
        senha: [null, [Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]],
        confirmarSenha: [null, [Validators.compose([Validators.required])]],

        endereco: this.formBuilder.group({
          cep: ['', [Validators.required]],
          numero: ['', [Validators.required]],
          complemento: ['', []],
          logradouro: ['', [Validators.required]],
          bairro: ['', [Validators.required]],
          cidade: ['', [Validators.required]],
          estado: ['', [Validators.required]]
        })
      },
      {
        validator: Validacoes.SenhasCombinam
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

      if ((charCode < 48 || charCode > 57) || (e.target.value.length >= max)) return false;
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

      if ((charCode < 48 || charCode > 57) || (e.target.value.length >= max)) return false;
    }
  }


  buscarCep(cep) {
    this.viaCep.getEnderecoPorCep(cep).subscribe((data) => {
      this.objEnd = data;
      this.logradouro = this.objEnd.logradouro
      this.bairro = this.objEnd.bairro
      this.cidade = this.objEnd.localidade
      this.estado = this.objEnd.uf
    }
    )
  }


  //validar se os campos forem devidamente preenchidos 
  isErrorCampo(nomeCampo) {
    return (!this.regForm.get(nomeCampo).valid && this.regForm.get(nomeCampo).touched);
  }

  cadastrar() {

    if (this.regForm.get('confirmarSenha').errors == null) {

      if (confirm("Deseja prosseguir ?")) {

        if (this.regForm.valid) {
          //valido

          console.log(this.regForm.status)
          console.log(this.regForm)
          this.usuarioService.addUsuario(this.regForm.value)
            .subscribe(
              (dado) => {
                this.dialogService.showSuccess("Usuário salvo com sucesso");
                
                this.serviceLoginService.fazerLogin( 
                  {email:this.regForm.value.email, senha : this.regForm.value.senha} 
                  );

              }
            );


        } else {
          this.dialogService.showError("O formulário está inválido");
          console.log(this.regForm.status)        
          console.log(this.regForm.value)

        }
      }
    }
  }
}  