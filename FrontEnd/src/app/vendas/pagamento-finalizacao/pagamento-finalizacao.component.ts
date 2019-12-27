import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-pagamento-finalizacao',
  templateUrl: './pagamento-finalizacao.component.html',
  styleUrls: ['./pagamento-finalizacao.component.css']
})
export class PagamentoFinalizacaoComponent implements OnInit {

  pagaForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pagaForm = this.formBuilder.group(
      { nomeCartao: ['', [Validators.required] ],
        numCartao: ['', [Validators.maxLength] ],
        validade: ['', [Validators.required] ],
        cvv: ['', [Validators.maxLength] ]
      }
    );
  }

  onSubmit(){
    console.log(this.pagaForm);
    alert('Pedido realizado com sucesso!');
    this.router.navigate( ['/home']);
  }

   //validar se os campos forem devidamente preenchidos 
   isErrorCampo(nomeCampo){
    return (!this.pagaForm.get(nomeCampo).valid && this.pagaForm.get(nomeCampo).touched ); 
  }

}
