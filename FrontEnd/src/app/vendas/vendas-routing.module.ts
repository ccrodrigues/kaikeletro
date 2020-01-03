import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { HomeComponent } from './home/home.component';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { ProdutosDetalhesComponent } from './home/produtos-detalhes/produtos-detalhes.component';
import { PaginacaoComponent } from './home/paginacao/paginacao.component';
import { CarrinhoComponent } from './home/carrinho/carrinho.component';
import { ConfirmacaoEnderecoComponent} from './confirmacao-endereco/confirmacao-endereco.component'
import { PagamentoFinalizacaoComponent } from './pagamento-finalizacao/pagamento-finalizacao.component';
<<<<<<< HEAD
import { ProdutosComponent } from './home/produtos/produtos.component';
import { FaqComponent } from './faq/faq.component';
=======
import { ProdutosCategoriaComponent } from './produtos-categoria/produtos-categoria.component';
>>>>>>> atualizandoMenu


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: UsuarioLoginComponent},
  {path:'registro', component: TelaRegistroComponent},
  {path:'produtos', component: ProdutosComponent},
  {path:'faq', component: FaqComponent},  
  {path: 'paginacao', component: PaginacaoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'entrega', component: ConfirmacaoEnderecoComponent},
  {path: 'pagamento', component: PagamentoFinalizacaoComponent},
<<<<<<< HEAD

  {path: 'detalhes/:id', component: ProdutosDetalhesComponent}
=======
  {path: 'nossos-produtos', component: ProdutosCategoriaComponent}
>>>>>>> atualizandoMenu

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
