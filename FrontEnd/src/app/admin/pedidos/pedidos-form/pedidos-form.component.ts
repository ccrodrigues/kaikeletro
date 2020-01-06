import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Validacoes } from 'src/app/shared/validacoes';
import { EnderecoModel } from 'src/app/shared/models/endereco.model';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';
import { DialogService } from 'src/app/shared/toaster/dialog.service';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import { VendaService } from 'src/app/shared/services/venda.service';
import { VendasModel } from 'src/app/shared/models/vendas.model';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.css']
})
export class PedidosFormComponent implements OnInit {

  detalhesForm: FormGroup;
  
  idRota;
  isEdicao = false;
  
  pedido : VendasModel ;
  

  constructor(
    private formBuilder: FormBuilder,
    private viaCep: AuthServiceService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private vendaService: VendaService,        
    private dialogService : DialogService
    
    ) {

      this.detalhesForm = this.formBuilder.group(
        {
          pedido : this.formBuilder.group( {
            id:[ {value: '', disabled: true}, [] ],
            
            //item : pedido.item,
            usuario : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
            parcela : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
            valor: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
            valorParcela : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
            totalItens: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
            dataVenda : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
                        
            /*,
  
            endereco: {
              cep: ['', [Validators.required]],
              numero: ['', [Validators.required]],
              complemento: ['', []],
              logradouro: ['', [Validators.required]],
              bairro: ['', [Validators.required]],
              cidade: ['', [Validators.required]],
              estado: ['', [Validators.required]]
            }*/
  
          })
  
        });

     }

  ngOnInit() {

    
    this.activedRoute.params.subscribe((data) => {
      this.idRota = data.id;
      console.log('venda id: ' + this.idRota);

      if (this.idRota){
        console.log('Edição');
        this.isEdicao = true;

        this.vendaService.getVendaById(this.idRota).subscribe(
          (pedido) => {

          console.log("=====>> " , pedido);
          this.pedido = pedido;
          
          this.detalhesForm.patchValue( this.convertToForm ( this.pedido ) );

      });

      } else {
        console.log('Criação');
        this.isEdicao = false;
      }


    });


  }

  /*onSubmit() {
    console.log(this.detalhesForm);
    //Criação
    if (this.isEdicao == false) {

      this.usuarioService.addUsuario(this.detalhesForm.value.usuario).subscribe((adicionar) => {
        console.log(adicionar);
        this.router.navigate(['admin/usuarios']);
      }
      );
    } else {

      this.usuarioService.updateUsuario(this.idRota, this.detalhesForm.value.usuario)
        .subscribe((reposta) => {
          console.log(reposta);
          this.dialogService.showSuccess("Usuário alterado com sucesso");
          //redreciona apos atualizar para navigate indicada
          this.router.navigate(['admin/usuarios'])
        });
    }
  }


  //validar se os campos forem devidamente preenchidos 
  isErrorCampo(nomeCampo) {
    return (!this.detalhesForm.get(nomeCampo).valid && this.detalhesForm.get(nomeCampo).touched);
  }

  getField(field : string){
    return this.detalhesForm.get(field);
  }

  deleteEndereco(end : EnderecoModel){

    if( confirm(`Deseja mesmo deletar o endereço ${end.logradouro}` ) ){
      this.enderecoService.deleleById(end.idEndereco).subscribe(
        (resp) => {
          this.dialogService.showSuccess("Endereço deletado com sucesso!");

          let index = this.endereco.findIndex( e => { e.idEndereco == end.idEndereco } );

          this.endereco.splice(index,1);

        },
        (error) =>{
          this.dialogService.showError("Falha ao deletar endereço, tente mais tarde!");        
        }
      );
    }



  }
*/
  private convertToForm(pedido : VendasModel){

    return  {
      pedido : {
        id : pedido.id,
        item : pedido.item,
        usuario: pedido.usuario,
        parcela: pedido.parcela,
        valor: pedido.valor,
        valorParcela : pedido.valorParcela,
        totalItens: pedido.totalItens,
        dataVenda : pedido.dataVenda        
      }
      
    };

  }


}
