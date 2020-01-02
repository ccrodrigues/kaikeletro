import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriasService } from 'src/app/shared/Services/categorias.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProdutoModel } from 'src/app/shared/models/produto.model';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})

export class AdicionarComponent implements OnInit {

  erros                 : boolean[]     = [false, false, false, false, false]
  prodForm              : FormGroup               ;
  selecionadas          : any           = []      ;
  imagensSelecionada    : any           = null    ;
  categorias            : any           = []      ;
  showInput             : boolean       = true    ;
  pesquisado                            = []      ;
  userPesquisando                       = false   ;
  imagem                : File          = null    ;
  ler                                   = new FileReader();
  images                : any           = []      ;
  queVai                : any           = []      ;
  showAddCat            : boolean       = false   ;
  erroAdd               : boolean       = false   ;
  @Output() adicionado                  = new EventEmitter();

  constructor(private cs : CategoriasService,
              private fb : FormBuilder,
              private ps : ProdutosService,
              private route : Router) { }

    ngOnInit() {

    this.prodForm = this.fb
        .group({
          idProduto: ['',[]],
          nome: ['', []],
          preco: ['', []],
          imagens: [{
            imagens: this.queVai
          }, []],
          descricao: ['', []],
          categorias: [this.selecionadas, []]
    });

    this.cs.getAll().subscribe(
      a => {
        this.categorias = a;
      }
    )

  }

  escolhida(categoria, valor) {
    if(categoria.className == "selecionado") {
      categoria.className = ""
      this.selecionadas.splice( this.selecionadas.indexOf({
        "idCategoria": valor.idCategoria
      }) , 1);

    } else {
      categoria.className = "selecionado"
      this.selecionadas.push({
        "idCategoria": valor.idCategoria
      })
    }
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
      this.queVai[0]  = {
        "idImagem": null ,
        "imagemProduto" : reader.result
      };

      alter.src = reader.result;
      
    }
  }

  imagensSelect(img) {
    this.imagem = <File>img.target.files[0];
    this.putImages(img.value);
  }

  putImages(url) {
    let mimetype = this.imagem.type;
    if(mimetype.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(this.imagem);
    reader.onload = (_event) => {
      if(this.images.length < 5) {
        this.images.push(reader.result);

        this.queVai.push({
          "idImagem": null ,
          "imagemProduto" : reader.result
        })
      }
    }
  }

  lessImage(img) {
    for(let i = 0; 0 < this.images.length; i++) {
      if(this.images[i].imagemProduto == img || this.images[i] == img) {
        this.queVai.splice({
          "idImagem": null ,
          "imagemProduto" : i
        }, 1);
        return this.images.splice(i, 1)
      }
    }
  }

  onSubmit() {
    
    if(this.erros[0]) {
    let produto = new ProdutoModel();

    produto.nome = this.prodForm.controls["nome"].value;
    produto.idProduto = this.prodForm.controls["idProduto"].value;
    produto.descricao = this.prodForm.controls["descricao"].value;
    produto.imagens = this.prodForm.controls["imagens"].value.imagens;
    produto.preco = this.prodForm.controls["preco"].value;
    produto.categorias = this.prodForm.controls["categorias"].value;
  
    console.log(produto.imagens)

    this.ps.saveProduto(produto).subscribe(
      a => {
        
        this.adicionado.emit("");

      },
      erro => {
        console.log(erro)
      }
    );
    } else {
      this.erros[0] = true;
    }
  }

  showAddCategoria() {
    this.showAddCat = !this.showAddCat;
  }

  addCategoria(event, newCategoria) {
    event.preventDefault();

    let verificador;

    this.categorias.map( a => {
      if(a.nome.toUpperCase() == newCategoria.value.toUpperCase()) 
      verificador =  true
    } )

    if(verificador) {
      this.erroAdd = true;
    } else {
      let categoria = { "nome" : newCategoria.value};
      this.cs.addCat(categoria).subscribe(
        a => {
          this.categorias.push(categoria);
        },
        error => {
          console.log(error)
        }
      );
      this.showAddCat = false;

    }

  }

} 
