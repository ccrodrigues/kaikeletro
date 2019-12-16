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

import com.kaikeletro.domain.Usuario;

import javassist.tools.rmi.ObjectNotFoundException;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService service;

	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<Usuario>> getAll() {
		return ResponseEntity.ok().body(service.getAll());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Optional<Usuario>> findById(@PathVariable("id") int idUsuario) {
		Optional<Usuario> obj = service.findById(idUsuario);

		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@P 	athVariable("id") int id) {
		return ResponseEntity.ok().body(service.deleteById(id));
	}

	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<Usuario> save(@RequestBody @Valid Usuario usuario) {

		return ResponseEntity.ok().body(service.save(usuario));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Usuario> update(@RequestBody Usuario usuario, @PathVariable("id") int id) {

		return ResponseEntity.ok().body(service.updatebyID(id, usuario));
	}

}
