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

import com.kaikeletro.domain.EnderecoUsuario;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.domain.Venda;
import com.kaikeletro.dto.VendaDTO;
import com.kaikeletro.exception.TratamentoDeErros;
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

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {

		Optional<Venda> obj = service.findById(id);
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Venda());
		}
		return ResponseEntity.ok().body(service.deleteById(id));
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public ResponseEntity<Optional<Venda>> findById(@PathVariable("id") int id) {

		Optional<Venda> obj = service.findById(id);

		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Usuario());
		}

		return ResponseEntity.ok().body(obj);
	}

}
