import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 produtos = [
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   {"nome" : "produto", "descricao" : "testetestetestetestetestetesteteste", "preco" : 1000.00, "categoria" : "Eletronico", "img" : "https://cdn.shoppingcidade.com.br/media/catalog/product/cache/ba5967e294cce1ddc9b45d24a0071b5e/l/g/lg-k12-max-azul-manna-celulares-shopping-cidade-1.jpg"},
   
 ]
  constructor() { }

  ngOnInit() {
   
  }

}
