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
import com.kaikeletro.exception.TratamentoDeErros;
import com.kaikeletro.services.EnderecoUsuarioService;

@RestController
@RequestMapping(value = "/enderecos")
public class EnderecoUsuarioResource {

	@Autowired
	EnderecoUsuarioService service;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<EnderecoUsuario>> getAll() {

		return ResponseEntity.ok().body(service.getAll());
	}
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Optional<EnderecoUsuario>> findById(@PathVariable("id") int id) {
		Optional<EnderecoUsuario> obj = service.findById(id);

		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Usuario());
		}

		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value = "/email/{email}", method = RequestMethod.GET)
	public ResponseEntity<List<EnderecoUsuario>> findById(@PathVariable("email")String email) {

		return ResponseEntity.ok().body(service.findByUsuariosEmailContaining(email));
	}
	
	@RequestMapping( method = RequestMethod.POST)
	public ResponseEntity<EnderecoUsuario> save(@RequestBody @Valid EnderecoUsuario end) {
		return ResponseEntity.ok().body(service.save(end));
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<EnderecoUsuario> update(@RequestBody EnderecoUsuario endereco, @PathVariable("id") int id) {

		return ResponseEntity.ok().body(service.updatebyID(endereco, id));
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {
		System.out.println("Delete Endereço " + id);
		return ResponseEntity.ok().body(service.deleteById(id));
	}
}
