import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoriasService } from 'src/app/shared/Services/categorias.service';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input() produto  : any      = [];
  @Output() close              = new EventEmitter();
  imagens           : any      = [];
  imagem            : File     = null;
  ler                          = new FileReader();
  valor;
  meuForm           : FormGroup;
  imagemPrincipal   : any      = [];
  selecionadas      : any      = [];
  allCategorias     : any      = [];
  categorias        : any      = [];
  allImage          : any      = [];

  constructor(private sanitizer : DomSanitizer,
              private fb : FormBuilder,
              private cs : CategoriasService,
              private ps : ProdutosService) { }

  ngOnInit() {
    
    this.imagens = [...this.produto.imagens];

    this.imagemPrincipal = this.imagens[0].imagemProduto

    this.imagens = this.imagens.splice(0, 1);

    this.selecionadas = this.produto.categorias;

    this.meuForm = this.fb
        .group({
          idProduto: [this.produto.idProduto ,[]],
          nome: [this.produto.nome , []],
          preco: [this.produto.preco , []],
          imagens: [{
            imagens: this.produto.imagens
          } , []],
          descricao: [this.produto.descricao , []],
          categorias: [this.produto.categorias , []]
    });

    this.cs.getAll().subscribe(
      a => {
        this.allCategorias = a;
      }
    );

  }

  onSubmit() {
    let produto = new ProdutoModel();

    produto.idProduto = this.produto.idProduto;
    produto.nome = this.meuForm.value.nome;
    produto.descricao = this.meuForm.value.descricao;
    produto.preco = this.meuForm.value.preco;
    produto.imagens = this.meuForm.value.imagens.imagens;
    produto.categorias = this.meuForm.value.categorias;

    console.log(produto)

    this.ps.updateProduto(produto, this.produto.idProduto).subscribe(

      a => {
        this.fechar();
      },
      e => {
        console.log(e)
      }

    );
    
  }

  fechar() {
    this.close.emit(false)
  }

  imagensSelect(img) {
    this.imagem = <File>img.target.files[0];
    this.putImages(img.value);
  }

  imagePrincipalSelect(img, alter) {
    this.imagem = <File>img.target.files[0];
    this.putImage(img.value, alter);
  }

  putImage(url, alter) {
    let mimetype = this.imagem.type;

    if(mimetype.match(/image\/*/) == null) {
      return;
    }
    
    let reader = new FileReader();
    reader.readAsDataURL(this.imagem);
    reader.onload = (_event) => {

      this.produto.imagens[0] = {
        "idImagem" : null,
        "imagemProduto" :reader.result};

      this.imagemPrincipal = reader.result;
    }
  }


  putImages(url) {
    let mimetype = this.imagem.type;

    if(mimetype.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.imagem);
    reader.onload = (_event) => {
      this.produto.imagens.push({ "idImagem" : null, "imagemProduto" : reader.result});
      this.imagens.push({ "idImagem" : null, "imagemProduto" : reader.result});
    }
  }

  lessImage(img) {
    for(let i = 0; 0 < this.imagens.length; i++) {
        if(this.imagens[i].imagemProduto == img.imagemProduto) {
        this.imagens.splice({
          "idImagem": null ,
          "imagemProduto" : i
        }, 1);
        this.produto.imagens.splice({
          "idImagem": null ,
          "imagemProduto" : i
        }, 1);
        return this.imagens.splice(i, 1)
      }
  }
}
  verificarImagem( imgs )  {
    return typeof imgs === 'string'
  }

  escolhida(categoria, valor) {

    if(categoria.className == "selecionado") {

      categoria.className = ""
      this.produto.categorias.splice( {
        "idCategoria": valor.idCategoria
      }, 1 )
      // this.produto.categorias.splice( this.selecionadas.indexOf({
      //   "idCategoria": valor.idCategoria,
      //   "nome" : valor.nome
      // }) , 1);


    } else {
 
      categoria.className = "selecionado"
      this.produto.categorias.push({
        "idCategoria": valor.idCategoria,
        "nome" : valor.nome
      })
    }
  }

  categoriaTem(cat) {

    let resp =  this.selecionadas.find(a => a.idCategoria == cat)
      
    console.log(resp)

    return isUndefined(resp) ? false : true;
  }


  
}