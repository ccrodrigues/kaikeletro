import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CreditCardValidator, CreditCard } from 'angular-cc-library';

@Component({
  selector: 'app-pagamento-finalizacao',
  templateUrl: './pagamento-finalizacao.component.html',
  styleUrls: ['./pagamento-finalizacao.component.css']
})
export class PagamentoFinalizacaoComponent implements OnInit {

  pagaForm: FormGroup;
  showType: boolean = false;
  card : any ;


  constructor(private router: Router,
              private formBuilder: FormBuilder) {
              }

  ngOnInit() {
    this.formBuilder = new FormBuilder();
    this.pagaForm = this.formBuilder.group(
      { nomeCartao: ['', [Validators.required] ],
        numCartao: ['', [CreditCardValidator.validateCCNumber] ],
        exp: ['', [CreditCardValidator.validateExpDate] ],
        cvv: ['', [Validators.required, Validators.maxLength] ]
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

  tipoCard(numCartao): void{
     this.card = CreditCard.cardFromNumber(numCartao);
    
     if(this.card){
      console.log(this.card.type);
       this.showType = true;
     }
    
    if (numCartao != null){
      console.log(this.card);
    }
  }
}
