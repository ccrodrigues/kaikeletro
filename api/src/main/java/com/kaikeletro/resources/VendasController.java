package com.kaikeletro.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.domain.Vendas;
import com.kaikeletro.services.VendasService;

@RequestMapping(value="vendas")
@RestController
public class VendasController {
	
	@Autowired
	private VendasService service;
	
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<Vendas>> getAll() {

		return ResponseEntity.ok().body(service.getAll());
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Vendas> createVenda(@RequestBody @Valid Vendas venda){
		return ResponseEntity.ok().body(service.createVenda(venda));
	}


}
