import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ServiceLoginService } from './service-login/service-login.service';


@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder :  FormBuilder
    , private serviceLogin : ServiceLoginService) {

   }

  ngOnInit() {

// declaração das variaveis para a validação dos campos e-mail e senha 
    this.loginForm = this.formBuilder.group( { 
      email : [ '',[Validators.required]  ], 
      senha : [ '' , [Validators.required] ] 

    });
  }
  onSubmit(){
    console.log(this.loginForm);

    //Verifica ao enviar se os dados informados são validos
    this.serviceLogin
    .fazerLogin(this.loginForm.value.email, this.loginForm.value.senha)
  }

  //campo para validar se os campos forem devidamente preenchidos 
 isErrorCampo(nomeCampo){
    return (!this.loginForm.get(nomeCampo).valid && this.loginForm.get(nomeCampo).touched ); 
  }
  
  verificarUsuario(){

  }
  //metodo para verificar se os dados de Autenticidade estão de acordo, recebe um boolean
  isErrorLogin(){
    return this.serviceLogin.getIsAutenticado();
    
    
        
  }
 
}

