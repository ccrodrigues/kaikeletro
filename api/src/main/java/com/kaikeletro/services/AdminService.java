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

import com.kaikeletro.domain.Admin;
import com.kaikeletro.repositories.AdminRepository;

@Service
public class AdminService implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder; 
	
	public List<Admin> getAll() {
		List<Admin> administrador = adminRepo.findAll();
		return administrador;
	}
	
	public Optional<Admin> findById(int id) {
		return adminRepo.findById(id);
	}

	public Admin save(Admin user) {
		user.senha=bCryptPasswordEncoder.encode(user.senha);
		return adminRepo.save(user);
	}

	public Admin updatebyID(Admin user, int id) {

		Optional<Admin> userBD = adminRepo.findById(id);

		if (userBD.isPresent() == true) {
			userBD.get().setId(user.getId());
			userBD.get().setNome(user.getNome());
			userBD.get().setEmail(user.getEmail());
			userBD.get().setSenha(user.getSenha());
			userBD.get().setCpf(user.getCpf());
			userBD.get().setNivel(user.getNivel());
			return adminRepo.save(userBD.get());
		} else {
			return null;
		}
	}

	public boolean deleteById(int id) {
		adminRepo.deleteById(id);
		return true;
	}
	public AdminService() {
	}	
	
	public Page<Admin> findPage(int pagina, int quantidadeDeLinhas, 
			String direcao, String campoOrdenacao) {
		PageRequest pageRequest = PageRequest.of(pagina, quantidadeDeLinhas,
				Direction.valueOf(direcao), campoOrdenacao);
		return adminRepo.findAll(pageRequest);
	}
	// Método do UsuarioController - Busca por nome
		public List<Admin> findByNomeContains(String nomeBusca){
			return adminRepo.findByNomeContainsIgnoreCase(nomeBusca);
		}
		
		// Método do UsuarioController - Busca por Email
		public List<Admin> findByEmail(String emailBusca){
			return adminRepo.findByEmailIgnoreCase(emailBusca);
		}
		
		// Método do UsuarioController - Busca por cpf
		public List<Admin> findBycpf(String cpf){
			return adminRepo.findBycpf(cpf);
		}
		
	public boolean findOneByEmailAndSenha(String email, String senha) {
			senha=bCryptPasswordEncoder.encode(senha);
			System.out.println(senha);
			if(adminRepo.findOneByEmailAndSenha(email, senha)!= null) {
				return true;
			}else {
				return false;
			}
			
		}
	
	// Método do UsuarioController - Busca por nivel
	public List<Admin> findByNivel(int nivel){
		List<Admin> lista = adminRepo.findByNivel(nivel);
		return lista;
	}

	
}
