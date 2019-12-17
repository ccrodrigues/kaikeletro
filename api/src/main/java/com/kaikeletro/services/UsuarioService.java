package com.kaikeletro.services;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Usuario;
import com.kaikeletro.repositories.UsuarioRepository;

@Service
public class UsuarioService implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
	private UsuarioRepository userRepo;

	public List<Usuario> getAll() {
		List<Usuario> usuario = userRepo.findAll();
		return usuario;
	}

	public Optional<Usuario> findById(int id) {
		return userRepo.findById(id);
	}

	public Usuario save(Usuario user) {
		return userRepo.save(user);
	}

	public Usuario updatebyID(Usuario user, int id) {

		Optional<Usuario> userBD = userRepo.findById(id);

		if (userBD.isPresent() == true) {
			userBD.get().setId(user.getId());
			userBD.get().setNome(user.getNome());
			userBD.get().setEmail(user.getEmail());
			userBD.get().setSenha(user.getSenha());
			userBD.get().setDataDeNascimento(user.getDataDeNascimento());
			userBD.get().setCpf(user.getCpf());
			userBD.get().setTelefone(user.getTelefone());
			userBD.get().setCelular(user.getCelular());
			return userRepo.save(userBD.get());
		} else {
			return null;
		}
	}

	public boolean deleteById(int id) {
		userRepo.deleteById(id);
		return true;
	}

	public UsuarioService() {
	}	
	
	public Page<Usuario> findPage(int pagina, int quantidadeDeLinhas, 
			String direcao, String campoOrdenacao) {
		PageRequest pageRequest = PageRequest.of(pagina, quantidadeDeLinhas,
				Direction.valueOf(direcao), campoOrdenacao);
		return userRepo.findAll(pageRequest);
	}

	
	// Método do UsuarioController - Busca por nome
	public List<Usuario> findByNomeContains(String nomeBusca){
		return userRepo.findByNomeContainsIgnoreCase(nomeBusca);
	}
	
	// Método do UsuarioController - Busca por Email
	public List<Usuario> findByEmail(String emailBusca){
		return userRepo.findByEmailIgnoreCase(emailBusca);
		
		
	}
	// Método do UsuarioController - Busca por cpf
	public List<Usuario> findBycpf(String cpf){
		return userRepo.findBycpf(cpf);
	}
	
	
	
	
}
