import { Endereco } from './endereco.model';

export class Usuario {
    id: number;
    nome : string ;
    email: string ;
    senha: string ;
    cpf : String ;
    telefone : String ;
    celular : String ;
    dataDeNacimento : String ;

    idEndereco : Endereco[]; 
    
  }