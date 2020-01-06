import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ServiceLoginService } from './service-login/service-login.service';
import { UsuarioModel } from '../../shared/models/usuario.model';
import { StorageService } from 'src/app/shared/services/storage.service';


@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  loginForm : FormGroup;
  usuario : UsuarioModel;

  constructor(private formBuilder :  FormBuilder,
    private localStorage:StorageService
    , private serviceLogin : ServiceLoginService) {

   }

  ngOnInit() {
    this.localStorage.setLocalUser(null);
// declaração das variaveis para a validação dos campos e-mail e senha 
    this.loginForm = this.formBuilder.group( { 
      email : [ '',[Validators.required]  ], 
      senha : [ '' , [Validators.required] ] 
    });
  }
  onSubmit(){
    //console.log(this.loginForm);

    //Verifica ao enviar se os dados informados são validos
    let login = {email : this.loginForm.value.email, senha : this.loginForm.value.senha};
    
    return this.serviceLogin.fazerLogin(login);
  }

  //campo para validar se os campos forem devidamente preenchidos para habilitação do botão
 isErrorCampo(nomeCampo){
    return (!this.loginForm.get(nomeCampo).valid && this.loginForm.get(nomeCampo).touched ); 
  }
  //metodo para verificar se os dados de Autenticidade estão de acordo, recebe um boolean
  isErrorLogin(){
    return this.serviceLogin.isAutenticado();
          
  }
  
  
 
}

