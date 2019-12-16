package com.kaikeletro.resources;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
}
