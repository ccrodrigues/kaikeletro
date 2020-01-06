import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CreditCardValidator, CreditCard } from 'angular-cc-library';
import { StorageService } from 'src/app/shared/services/storage.service';
import { EnderecoModel } from 'src/app/shared/models/endereco.model';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ItemVendaModel } from 'src/app/shared/models/item-venda.model';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-pagamento-finalizacao',
  templateUrl: './pagamento-finalizacao.component.html',
  styleUrls: ['./pagamento-finalizacao.component.css']
})
export class PagamentoFinalizacaoComponent implements OnInit {

  pagaForm: FormGroup;
  showType: boolean = false;
  card : any ;

  enderecoObj: EnderecoModel;
  venda: ItemVendaModel[];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private localStorage: StorageService,
              private carrinhoService: CarrinhoService,
              private vendaService: VendaService) {
              }

  ngOnInit() {
    this.venda = this.localStorage.getCarrinho();
    console.log(this.venda)
    this.enderecoObj = this.localStorage.getEndereco();
    this.formBuilder = new FormBuilder();
    this.pagaForm = this.formBuilder.group(
      { nomeCartao: ['', [Validators.required] ],
        numCartao: ['', [CreditCardValidator.validateCCNumber] ],
        exp: ['', [CreditCardValidator.validateExpDate] ],
        cvv: ['', [Validators.required, Validators.maxLength] ]
      }
    );
  }

  finalizarVenda() {
    this.carrinhoService.fecharVenda();
    this.vendaService.fecharVenda(this.carrinhoService.venda).subscribe(
      (data) => {
        data = data
        console.log(data)
        console.log(this.carrinhoService.itensCarrinho);
        
        this.carrinhoService.itensCarrinho = this.carrinhoService.criarOuLimparCarrinho()
        this.localStorage.setCarrinho(this.carrinhoService.itensCarrinho)
      } 
    )

    console.log(this.pagaForm);
    alert('Pedido realizado com sucesso!');
    this.router.navigateByUrl("/home")
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
