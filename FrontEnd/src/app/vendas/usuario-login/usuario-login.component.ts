import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../../shared/services/guards/auth.service';
import { Usuario } from '../../shared/models/usuario.model';


@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  loginForm: FormGroup;
  usuario: Usuario;
  isError : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit() {

    // declaração das variaveis para a validação dos campos e-mail e senha 
    this.loginForm = this.formBuilder.group({
      email: ['admin@brq.com', [Validators.required]],
      senha: ['admin', [Validators.required]]
    });

    
  }
  onSubmit() {
    //console.log(this.loginForm);

    //Verifica ao enviar se os dados informados são validos
    let login = { email: this.loginForm.value.email, senha: this.loginForm.value.senha };
    
    return this.authService.fazerLogin(login);
  }

  //campo para validar se os campos forem devidamente preenchidos para habilitação do botão
  isErrorCampo(nomeCampo) {
    return (!this.loginForm.get(nomeCampo).valid && this.loginForm.get(nomeCampo).touched);
  }
  //metodo para verificar se os dados de Autenticidade estão de acordo, recebe um boolean

}

