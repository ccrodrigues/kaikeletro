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


@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  endereco: EnderecoModel;
  detalhesForm: FormGroup;
  idUsuarioRota: number;
  idEnderecoRota: number;
  isEdicao: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private viaCep: AuthServiceService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private enderecoService: EnderecoService,
    private dialogService: DialogService
  ) {

    this.detalhesForm = this.formBuilder.group(
      {
        endereco: this.formBuilder.group({

          cep: ['', [Validators.required]],
          numero: ['', [Validators.required]],
          complemento: ['', []],
          logradouro: ['', [Validators.required]],
          bairro: ['', [Validators.required]],
          cidade: ['', [Validators.required]],
          estado: ['', [Validators.required]]

        })

      });

  }

  ngOnInit() {


    this.activedRoute.params.subscribe((data) => {
      this.idUsuarioRota = data.idUsuario;
      this.idEnderecoRota = data.idEndereco;

      console.log('usuário : ' + this.idUsuarioRota + ' endereco : ' + this.idEnderecoRota);

      if (this.idEnderecoRota) {
        console.log('Edição');
        this.isEdicao = true;

        this.enderecoService.getEnderecoById(this.idEnderecoRota).subscribe(
          (response) => {
            console.log("=====>> ", response);

            this.endereco = response;

            this.detalhesForm.patchValue(this.convertToForm(this.endereco));

          });

      } else {
        console.log('Criação');
        this.isEdicao = false;
      }


    });


  }

  //validar se os campos forem devidamente preenchidos 
  isErrorCampo(nomeCampo) {
    return (!this.detalhesForm.get(nomeCampo).valid && this.detalhesForm.get(nomeCampo).touched);
  }

  getField(field: string) {
    return this.detalhesForm.get(field);
  }
  onSubmit() {
    console.log(this.detalhesForm);
    //Criação
    if (this.isEdicao == false) {

      this.enderecoService.create(this.detalhesForm.value.endereco).subscribe(
        (adicionar) => {
          console.log(adicionar);
          this.dialogService.showSuccess("Endereço criado com sucesso");
          this.router.navigate(['admin/usuarios']);
      }
      );
    } else {

      this.enderecoService.update(this.idEnderecoRota, this.detalhesForm.value.endereco)
        .subscribe((reposta) => {
          console.log(reposta);
          this.dialogService.showSuccess("Endereço alterado com sucesso");
          //redreciona apos atualizar para navigate indicada
          this.router.navigate(['admin/usuarios'])
        });
    }
  }

  private convertToForm(end) {
    return {
      endereco: {
        idEndereco: end.idEndereco,
        cep: end.cep,
        logradouro: end.logradouro,
        complemento: end.complemento,
        bairro: end.bairro,
        cidade: end.cidade,
        estado: end.estado,
        numero: end.numero
      }

    };
  }


}
