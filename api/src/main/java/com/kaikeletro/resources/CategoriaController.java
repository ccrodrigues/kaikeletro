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

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.services.CategoriaService;

@RestController
@RequestMapping(value="/categorias")
public class CategoriaController {

	@Autowired
	CategoriaService categoriaService;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity <List <Categoria> > listarCategorias(){
		return ResponseEntity.ok().body(categoriaService.listarCategorias());
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<Optional <Categoria> > findbyId(@PathVariable("id")int id){
		return ResponseEntity.ok().body(categoriaService.findById(id));
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Categoria> createCategoria(@RequestBody @Valid Categoria categoria) {
		return ResponseEntity.ok().body(categoriaService.createCategoria(categoria));
	}	
	
	@RequestMapping(value="/{id}", method=RequestMethod.PATCH)
	public ResponseEntity<Categoria> editCategoria(@RequestBody Categoria categoria,
																@PathVariable("id")int id){
		return ResponseEntity.ok().body(categoriaService.editCategoria(categoria, id));
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteCategoria(@PathVariable("id")int id){
		return ResponseEntity.ok().body(categoriaService.deleteCategoria(id));
	}
}
