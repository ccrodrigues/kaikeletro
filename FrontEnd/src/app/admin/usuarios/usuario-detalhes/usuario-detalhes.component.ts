import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Validacoes } from 'src/app/shared/validacoes';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { AuthServiceService } from 'src/app/shared/Services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { EnvService } from 'src/app/env.service';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {

  detalhesForm : FormGroup;
  objEnd : Endereco;
  idRota;
  isEdicao = false;
  usuario : Usuario[] = [];
  endereco : Endereco[] = [];

  constructor(private formBuilder :  FormBuilder
              ,private viaCep : AuthServiceService
              , private activedRoute : ActivatedRoute
              ,private usuarioService : UsuarioService
              ,private router : Router
              , private envService: EnvService) { }

  ngOnInit() {

    this.detalhesForm = this.formBuilder.group( 
      { 
      usuario : [{
      id: ['',[Validators.required ] ],
      nome : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)] ],
      nascimento: ['', [Validators.compose([Validators.required, Validacoes.MaiorQue18Anos])]],
      cpf: ['', [Validators.compose([Validators.required, Validacoes.validaCpf])]],
      telefone: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required]],
    }],

      endereco: [{
        cep: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: ['',[] ],
        logradouro: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]]
      }]
    });
    this.activedRoute.params.subscribe( (data)=>{
      this.idRota = data.id;
      console.log('ID DA ROTA: ' + this.idRota);
  
      if(this.idRota){
        console.log('Edição');
        this.isEdicao = true;
  
        this.usuarioService.getOneUsuario(this.idRota).subscribe( (usuarioAPI)=>{
          //patchValue quando o formulario já está criado e quer alterar o campo
          this.detalhesForm.patchValue(
            {
              usuario : {
              id : usuarioAPI['id'],
              nome : usuarioAPI['nome'],
              nascimento: ['nascimento'],
              cpf: ['cpf'],
              telefone: ['telefone'],
              celular: ['celular'],
              email: ['email'],
              },
              endereco: {
                cep: ['cep'],
                numero: ['numero'],
                complemento: ['complemento'],
                logradouro: ['logradouro'],
                bairro: ['bairro'],
                cidade: ['cidade'],
                estado: ['estado']
  
              }
          });
        });
        
      }else{
        console.log('Criação');
        this.isEdicao = false;
      }
      
  
    } );
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
      console.log('res cep ' + data);
      this.objEnd = data;
    }
    )
  }

  onSubmit(){
    console.log(this.detalhesForm);
    //Criação
    if(this.isEdicao == false){

      this.usuarioService.addUsuario(this.detalhesForm.value.usuario).subscribe( (adicionar)=>{
        console.log(adicionar);
        this.router.navigate( [ '/usuarios' ]) ;
      }
      );
    }else{
  
      this.usuarioService.updateUsuario(this.idRota, this.detalhesForm.value.usuario)
      .subscribe( (reposta)=>{
        console.log(reposta);
        console.log(this.detalhesForm.value.usuario);
        //redreciona apos atualizar para navigate indicada
        this.router.navigate(['/usuarios'])
      });
    }
    }
  

  //validar se os campos forem devidamente preenchidos 
  isErrorCampo(nomeCampo){
    return (!this.detalhesForm.get(nomeCampo).valid && this.detalhesForm.get(nomeCampo).touched ); 
  }

}


 
  

 
