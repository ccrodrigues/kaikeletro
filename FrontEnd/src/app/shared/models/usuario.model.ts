import { EnderecoModel } from './endereco.model';

export class UsuarioModel {
    id: number;
    nome : string ;
    email: string ;
    senha: string ;
    cpf : String ;
    telefone : String ;
    celular : String ;
    dataDeNacimento : String ;

    idEndereco : EnderecoModel[]; 
    
  }