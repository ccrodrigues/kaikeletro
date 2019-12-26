package com.kaikeletro.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kaikeletro.domain.EnderecoUsuario;
import com.kaikeletro.repositories.EnderecoUsuarioRepository;

@Service
public class EnderecoUsuarioService {
	
	private EnderecoUsuarioRepository endRepo;
	
	public List<EnderecoUsuario> getAll() {
		List<EnderecoUsuario> enderecos = endRepo.findAll();
		return enderecos;
	}

	public Optional<EnderecoUsuario> findById(int id) {
		return endRepo.findById(id);
	}

	public EnderecoUsuario save(EnderecoUsuario end) {
		return endRepo.save(end);
	}
}
