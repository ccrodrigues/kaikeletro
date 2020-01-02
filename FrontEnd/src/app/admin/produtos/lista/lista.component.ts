import { Component, OnInit, Input, Output } from '@angular/core';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { CategoriasService } from 'src/app/shared/Services/categorias.service';
import { iif } from 'rxjs';
import { isNull, isString, isNumber, isUndefined } from 'util';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  isShowMore          : boolean   = false;
  isDelete            : boolean   = false;
  var_error_pesquisa  : boolean   = true;
  listProducts        : any       = [];
  @Input() Produtos;
  pesquisado;
  selecionado;
  id;
  result_pesquisa     : any       = null;
  erro_msg_pesquisa   : string;
  alfabeto            : string[]  = [ "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H",
                                    "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P",
                                    "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X",
                                    "Y" , "Z"];
  numbers             : number[]  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  ngOnInit() {
    this.showAll();

  }

  showMsgApagou() {
    this.showAll();
  }

  showAll() {
    //    Pegando todos os registros de produtos
    this.ps.getAll().subscribe(
      a => {
        this.listProducts = a;
      }
    );
  }

  showMore(prod) {
    this.isShowMore = true;
    this.selecionado = prod;
  }

  lessMore() {
    this.isShowMore = false;
    this.showAll();
  }

  showDelete(id) {
    this.isDelete = true;
    this.id = id;
  }

  lessDelete() {
    this.isDelete = false;
  }

  pesquisar(POR, PESQ) {
    this.result_pesquisa  = undefined;

    if(POR.value == "idProduto"){
      let escolha = this.validar_id(PESQ.value);
      escolha ? 
      this.pegar_produto_por_id(POR.value, PESQ.value) : this.msg("Não use letras e caracteres especiais!")
    }

    else if( POR.value == "nome" ) {
      let escolha = this.validar_nome(PESQ.value.toUpperCase());
      escolha ? 
      this.pegar_produto_por_nome(POR.value, PESQ.value) : this.msg("Não utilize caracteres especias!")
    }

  }

  pegar_produto_por_id(campo, pesquisa) {
    this.listProducts.forEach(element => {
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

  validar_id(pesquisa) : boolean {

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
    this.listProducts.forEach(element => {
      if( (element[campo] == pesquisa && isNumber(pesquisa) ||
      element[campo].indexOf(pesquisa) >= 0 && isUndefined(isNumber(pesquisa)) ) ) {
        this.result_pesquisa = element;
      };
    });
  }

  constructor(private ps: ProdutosService) { }

  isUndefined(dado) {
    return dado == undefined ? true : false;
  }

} 
