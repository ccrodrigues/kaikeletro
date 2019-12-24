package com.kaikeletro.resources;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.domain.ImagemProduto;
import com.kaikeletro.services.ImagemProdutoService;

@RestController
@RequestMapping(value="/imagens")
public class ImagemProdutoResource {
	
	@Autowired
	ImagemProdutoService imgService;
	
	@GetMapping
	public ResponseEntity<List <ImagemProduto> > getAllProdutos(){
		return ResponseEntity.ok().body(imgService.getAllImagens());
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity< Optional<ImagemProduto> > findById(@PathVariable("id") int id){
		return ResponseEntity.ok().body(imgService.findById(id));
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<ImagemProduto> createImagem(@RequestBody @Valid ImagemProduto img) {
		return ResponseEntity.ok().body(imgService.createImagem(img));
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteImagem(@PathVariable("id") int id){
		return ResponseEntity.ok().body(imgService.deleteImagem(id));
	}
	
	
}