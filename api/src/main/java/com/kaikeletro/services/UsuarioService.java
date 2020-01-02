package com.kaikeletro.services;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.EnderecoUsuario;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.repositories.EnderecoUsuarioRepository;
import com.kaikeletro.repositories.UsuarioRepository;

@Service
public class UsuarioService implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder; 
	
	@Autowired
	private UsuarioRepository userRepo;
	
	@Autowired
	EnderecoUsuarioRepository endRepo;

	public List<Usuario> getAll() {
		List<Usuario> usuario = userRepo.findAll();
		return usuario;
	}

	public Optional<Usuario> findById(int id) {
		return userRepo.findById(id);
	}

	public Usuario save(Usuario user) {
		user.senha=bCryptPasswordEncoder.encode(user.senha);	
		
		Usuario u = userRepo.save(user);
		
		for (EnderecoUsuario end : u.getIdEndereco()) {
			end.setFk_Usuario(u);
			endRepo.save(end);
		}
		
		return u;
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
	public Usuario findByEmail(String emailBusca){
		return  userRepo.findByEmailIgnoreCase(emailBusca);
	}
	
	// Método do UsuarioController - Busca por cpf
	public List<Usuario> findBycpf(String cpf){
		return userRepo.findBycpf(cpf);
	}
	
	
	public boolean findOneByEmailAndSenha(String email, String senha) {
		if(userRepo.findOneByEmailAndSenha(email, bCryptPasswordEncoder.encode(senha)) != null) {
			return true;
		}else {
			return false;
		}
	}
	
	}
	
	
	

