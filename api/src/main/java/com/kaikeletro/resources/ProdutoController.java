package com.kaikeletro.resources;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.domain.Produto;
import com.kaikeletro.services.ProdutoService;

@RestController
@RequestMapping(value="/produtos")
public class ProdutoController {
	
	@Autowired
	ProdutoService produtoService;

	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity<List <Produto> > listarProdutos(){
		return ResponseEntity.ok().body(produtoService.listarProdutos());
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<Optional <Produto> > findById(@PathVariable("id")int id){
		return ResponseEntity.ok().body(produtoService.findById(id));
	}
	
	//Buscar Produto pelo Nome
	@RequestMapping(value="/nome/{nomeBusca}", method=RequestMethod.GET)
	public ResponseEntity<List <Produto> > findProdutosByName(@PathVariable("nomeBusca")String nomeBusca){
		return ResponseEntity.ok().body(produtoService.findByNome(nomeBusca));
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Produto> createProduto(@RequestBody @Valid Produto prod){
		return ResponseEntity.ok().body(produtoService.createProduto(prod));
	}
	
	@RequestMapping(value="/{id]", method=RequestMethod.PATCH)
	public ResponseEntity<Produto> editProduto(@RequestBody Produto prod, @PathVariable("id") int id){
		return ResponseEntity.ok().body(produtoService.editProduto(id, prod));
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteProduto(@PathVariable("id") int id){
		return ResponseEntity.ok().body(produtoService.deleteProduto(id));
	}
	
	//Paginação
	@RequestMapping(value="/page", method=RequestMethod.GET)
	public ResponseEntity< Page <Produto> > findPage(
						@RequestParam(value="pagina", defaultValue="0")int pagina,
						@RequestParam(value="qtdLinhas", defaultValue="10") int qtdLinhas,
						@RequestParam(value="direcao", defaultValue="ASC") String direcao,
						@RequestParam(value="campo", defaultValue="idProduto") String campo) {
		
		Page<Produto> pageProdutos = produtoService.findPage(pagina, qtdLinhas, direcao, campo);
		
		return ResponseEntity.ok().body(pageProdutos);
	}

}
