import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/shared/Services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private serviceProduto : ProdutosService) { }

  ngOnInit() {
   
  }



}

