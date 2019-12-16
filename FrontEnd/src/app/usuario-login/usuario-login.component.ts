import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  loginForm : FormGroup;
  

  constructor(private formBuilder :  FormBuilder) {

   }

  ngOnInit() {


    this.loginForm = this.formBuilder.group( { 
      email : [ '',[Validators.required]  ], 
      senha : [ '' , [Validators.required] ] 

    });
  }
  onSubmit(){
    console.log(this.loginForm);
  }
 isErrorCampo(nomeCampo){
    return (!this.loginForm.get(nomeCampo).valid && this.loginForm.get(nomeCampo).touched ); 
  }
 
}

