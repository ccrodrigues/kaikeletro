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

import com.kaikeletro.domain.Admin;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.exception.TratamentoDeErros;
import com.kaikeletro.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/administrador")
public class AdminController {
	
	@Autowired
	private AdminService service;


	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<Admin>> getAll() {

		return ResponseEntity.ok().body(service.getAll());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Optional<Admin>> findById(@PathVariable("id") int idAdmin) {
		Optional<Admin> obj = service.findById(idAdmin);

		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(idAdmin, new Admin());
		}

		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {

		Optional<Admin> obj = service.findById(id);
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Admin());
		}
		return ResponseEntity.ok().body(service.deleteById(id));
	}

	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<Admin> save(@RequestBody @Valid Admin admin) {
		return ResponseEntity.ok().body(service.save(admin));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Admin> update(@RequestBody Admin admin, @PathVariable("id") int id) {
		Optional<Admin> obj = service.findById(id);
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Admin());
		}

		return ResponseEntity.ok().body(service.updatebyID(admin, id));
	}

	
	@RequestMapping(value = "/administrador/page", method = RequestMethod.GET)
	public ResponseEntity<Page<Admin>> findPage(@RequestParam(value = "pagina", defaultValue = "0") int pagina,
			@RequestParam(value = "quantidadeDeLinhas", defaultValue = "5") int quantidadeDeLinhas,
			@RequestParam(value = "direcao", defaultValue = "ASC") String direcao,
			@RequestParam(value = "campoOrdenacao", defaultValue = "id") String campoOrdenacao) {
		Page<Admin> administrador = service.findPage(pagina, quantidadeDeLinhas, direcao, campoOrdenacao);
		return ResponseEntity.ok().body(administrador);
	}

	// Busca por nome
	@RequestMapping(value = "nome/{nomeBusca}", method = RequestMethod.GET)
	public ResponseEntity<List<Admin>> findByNome(@PathVariable("nomeBusca") String nomeBusca) {

		List<Admin> lista = service.findByNomeContains(nomeBusca);

		return ResponseEntity.ok().body(lista);
	}

	// Busca por email
	@RequestMapping(value = "email/{emailBusca}", method = RequestMethod.GET)
	public ResponseEntity<List<Admin>> findByEmail(@PathVariable("emailBusca") String emailBusca) {
		List<Admin> lista = service.findByEmail(emailBusca);
		return ResponseEntity.ok().body(lista);
	}
	// Busca por cpf
	@RequestMapping(value = "cpf/{cpfBusca}", method = RequestMethod.GET)
	public ResponseEntity<List<Admin>> findBycpf(@PathVariable("cpfBusca") String cpf) {
		List<Admin> lista = service.findBycpf(cpf);
		return ResponseEntity.ok().body(lista);
	}
	
	@RequestMapping (value="login", method = RequestMethod.POST)
	public ResponseEntity<Boolean> admin(@RequestBody Admin admin) {	
		return ResponseEntity.ok().body(service.findOneByEmailAndSenha(admin.getEmail(), admin.getSenha()));
	}
	

	// Busca por nivel
	@RequestMapping(value="/nivel/{nivelBusca}", method=RequestMethod.GET)
	public ResponseEntity<List <Admin> > findByNivel(@PathVariable("nivelBusca")int nivel){
		return ResponseEntity.ok().body(service.findByNivel(nivel));
}
}
