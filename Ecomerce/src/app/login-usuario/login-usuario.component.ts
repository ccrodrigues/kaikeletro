import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  loginForm : FormGroup;
  

  constructor(private formBuilder :  FormBuilder) {

   }

  ngOnInit() {

    this.loginForm = this.formBuilder.group( { 
      email : [ '',[Validators.required]  ], 
      senha : [ '' , [Validators.required] ] 

    });
  }
 isErrorCampo(nomeCampo){
    return (!this.loginForm.get(nomeCampo).valid && this.loginForm.get(nomeCampo).touched ); 
  }
  onSubmit(){
    console.log(this.loginForm);
  }

}

