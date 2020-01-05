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

import com.kaikeletro.domain.Usuario;
import com.kaikeletro.dto.UsuarioDTO;
import com.kaikeletro.dto.UsuarioNewDTO;
import com.kaikeletro.exception.TratamentoDeErros;
import com.kaikeletro.services.UsuarioService;
import com.kaikeletro.util.DTOUtil;


@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioResource {

	@Autowired
	private UsuarioService service;


	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<Usuario>> getAll() {

		return ResponseEntity.ok().body(service.getAll());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Optional<Usuario>> findById(@PathVariable("id") int idUsuario) {
		Optional<Usuario> obj = service.findById(idUsuario);

		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(idUsuario, new Usuario());
		}

		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {

		Optional<Usuario> obj = service.findById(id);
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Usuario());
		}
		return ResponseEntity.ok().body(service.deleteById(id));
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Usuario> save(@RequestBody @Valid UsuarioNewDTO usuarioNewDTO) {
		
		System.out.println(usuarioNewDTO);		
		Usuario usuario = DTOUtil.usuarioNewFromDTO( usuarioNewDTO ) ;
		return ResponseEntity.ok().body(service.save( usuario   ));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Usuario> update(@RequestBody Usuario usuario, @PathVariable("id") int id) {
		Optional<Usuario> obj = service.findById(id);
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Usuario());
		}

		return ResponseEntity.ok().body(service.updatebyID(usuario, id));
	}

	//http://localhost:8080/usuarios/usuarios/page?pagina=1&quantidadeDeLinhas=1&direcao=ASC&campoOrdenacao=id
	@RequestMapping(value = "/usuarios/page", method = RequestMethod.GET)
	public ResponseEntity<Page<Usuario>> findPage(@RequestParam(value = "pagina", defaultValue = "0") int pagina,
			@RequestParam(value = "quantidadeDeLinhas", defaultValue = "5") int quantidadeDeLinhas,
			@RequestParam(value = "direcao", defaultValue = "ASC") String direcao,
			@RequestParam(value = "campoOrdenacao", defaultValue = "id") String campoOrdenacao) {
		Page<Usuario> usuarios = service.findPage(pagina, quantidadeDeLinhas, direcao, campoOrdenacao);
		return ResponseEntity.ok().body(usuarios);
	}

	// Busca por nome
	@RequestMapping(value = "nome/{nomeBusca}", method = RequestMethod.GET)
	public ResponseEntity<List<Usuario>> findByNome(@PathVariable("nomeBusca") String nomeBusca) {

		List<Usuario> lista = service.findByNomeContains(nomeBusca);

		return ResponseEntity.ok().body(lista);
	}

	// Busca por email
	@RequestMapping(value = "email/{emailBusca}", method = RequestMethod.GET)
	public ResponseEntity<Usuario> findByEmail(@PathVariable("emailBusca") String emailBusca) {
		Usuario lista = service.findByEmail(emailBusca);
		return ResponseEntity.ok().body(lista);
	}
	// Busca por cpf
	@RequestMapping(value = "cpf/{cpfBusca}", method = RequestMethod.GET)
	public ResponseEntity<List<Usuario>> findBycpf(@PathVariable("cpfBusca") String cpf) {
		List<Usuario> lista = service.findBycpf(cpf);
		return ResponseEntity.ok().body(lista);
	}
	
	@RequestMapping (value="login", method = RequestMethod.POST)
	public ResponseEntity<Boolean> usuario(@RequestBody Usuario user) {	
		System.out.print(user.getSenha());
		return ResponseEntity.ok().body(service.findOneByEmailAndSenha(user.getEmail(), user.getSenha()));
		
	}
	
}
