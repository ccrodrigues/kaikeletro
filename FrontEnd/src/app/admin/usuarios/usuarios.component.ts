import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { isNull, isString, isNumber, isUndefined } from 'util';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  var_error_pesquisa  : boolean   = true;
  listUsers;
  result;
  result_pesquisa     : any       = null;
  erro_msg_pesquisa   : string;
  alfabeto            : string[]  = [ "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H",
                                    "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P",
                                    "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X",
                                    "Y" , "Z"];
  numbers             : number[]  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.showAll();
  }
  showAll() {
    //    Pegando todos os registros de usuarios
    this.usuarioService.getAll().subscribe(
      cliente => {
        console.log(cliente)
        this.listUsers = cliente;
      }

    );
  }
  pesquisar(POR, PESQ) {
    this.result_pesquisa  = undefined;

    if(POR.value == "cpf"){
      let escolha = this.validar_cpf(PESQ.value);
      
      escolha ? 
      this.pegar_produto_por_cpf(POR.value, PESQ.value) : this.msg("Não use letras e caracteres especiais!")
      
    }

    else if( POR.value == "nome" ) {
      let escolha = this.validar_nome(PESQ.value.toUpperCase());
      escolha ? 
      this.pegar_produto_por_nome(POR.value, PESQ.value) : this.msg("Não utilize caracteres especias!")
    }


  }
  pegar_produto_por_cpf(campo, pesquisa) {
    this.listUsers.forEach(element => {
      if(element.idProduto == pesquisa)
        this.result_pesquisa = element;
    });
    
    if(isUndefined(this.result_pesquisa)) { 
      console.log("Nenhum dado foi encontrado")
    } else {
    }
  }

  pegar_produto_por_nome(campo, pesquisa) {

  }

  validar_nome(pesquisa) : boolean {
    
    for(let x = 0; x < pesquisa.length; x++) {
      let letter = this.alfabeto.find(element => element.toUpperCase() == pesquisa[x]);
      let number = this.numbers.find(element => pesquisa[x] == element);
      if( isUndefined(letter) && isUndefined(number)) {
        return false
      }
    }
    return true;

  }

  validar_cpf(pesquisa) : boolean {

    for(let x = 0; x < pesquisa.length; x++) {
      let number = this.numbers.find(element => pesquisa[x] == element);

      if( isUndefined(number) ) {
        return false
      }
    }
    return true;
  }

  msg(mensagem) {
    this.var_error_pesquisa = false;
    this.erro_msg_pesquisa = mensagem;
  }

  pegar_elemento(pesquisa, campo) : any{
    this.listUsers.forEach(element => {
      if( (element[campo] == pesquisa && isNumber(pesquisa) ||
      element[campo].indexOf(pesquisa) >= 0 && isUndefined(isNumber(pesquisa)) ) ) {
        this.result_pesquisa = element;
      };
    });
  }


}
