package com.kaikeletro.resources;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

import com.brq.mvc.exception.TratamentoDeErros;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.dto.UsuarioDto;
import com.kaikeletro.services.UsuarioService;

@RestController
@RequestMapping(value = "/usuarioDto")
public class UsuarioDtoController {

	@Autowired
	private UsuarioService userService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<UsuarioDto>> getAll() {
		
		List<Usuario> lista = userService.getAll();
		List<UsuarioDto> userDto = lista
									.stream() //pegando cada elemento
									.map(obj -> new UsuarioDto(obj)) //aplica a regra
									.collect((Collectors.toList())); //coloca em uma outra lista e salva em listaDTO
		
		
		return  ResponseEntity.ok().body(userDto);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Optional<Usuario>> findById(@PathVariable("id") int idUsuario) {
		Optional<Usuario> obj = userService.findById(idUsuario);

		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(idUsuario, new Usuario());
		}

		return ResponseEntity.ok().body(new CategoriaDTO(obj.get()));
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {

		Optional<Usuario> obj = userService.findById(id);
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Usuario());
		}
		return ResponseEntity.ok().body(userService.deleteById(id));
	}

	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<Usuario> save(@RequestBody @Valid Usuario usuario) {
		return ResponseEntity.ok().body(userService.save(usuario));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Usuario> update(@RequestBody Usuario usuario, @PathVariable("id") int id) {
		Optional<Usuario> obj = userService.findById(id);
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Usuario());
		}
		
		return ResponseEntity.ok().body(userService.updatebyID(usuario, id));
	}


	@RequestMapping(value = "/usuariosDto/page", method = RequestMethod.GET)
	public ResponseEntity<Page<Usuario>> findPage(@RequestParam(value = "pagina", defaultValue = "0") int pagina,
			@RequestParam(value = "quantidadeDeLinhas", defaultValue = "5") int quantidadeDeLinhas,
			@RequestParam(value = "direcao", defaultValue = "ASC") String direcao,
			@RequestParam(value = "campoOrdenacao", defaultValue = "id") String campoOrdenacao) {
		Page<Usuario> usuarios = userService.findPage(pagina, quantidadeDeLinhas, direcao, campoOrdenacao);
		return ResponseEntity.ok().body(usuarios);
	}

	
	
}
