package com.kaikeletro.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.domain.Venda;
import com.kaikeletro.dto.VendaDTO;
import com.kaikeletro.services.VendasService;
import com.kaikeletro.util.DTOUtil;

@RequestMapping(value = "vendas")
@RestController
public class VendaResource {

	@Autowired
	private VendasService service;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Venda>> getAll() {

		return ResponseEntity.ok().body(service.getAll());
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Venda> createVenda(@RequestBody VendaDTO vendaDTO) {
		System.out.println(vendaDTO);
		
		Venda venda = DTOUtil.vendaFromDTO(vendaDTO);
		
		return ResponseEntity.ok().body(service.createVenda(venda));
	}

}
