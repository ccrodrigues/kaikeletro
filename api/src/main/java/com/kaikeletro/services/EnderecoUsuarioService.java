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
	
	public EnderecoUsuario updatebyID(EnderecoUsuario end, int id) {

		Optional<EnderecoUsuario> endBD = endRepo.findById(id);

		if (endBD.isPresent() == true) {
			endBD.get().setIdEndereco(end.getIdEndereco());
			endBD.get().setCep(end.getCep());
			endBD.get().setCidade(end.getCidade());
			endBD.get().setEstado(end.getEstado());
			endBD.get().setFk_Usuario(end.getFk_Usuario());
			endBD.get().setLogradouro(end.getLogradouro());
			endBD.get().setNumero(end.getNumero());
			return endRepo.save(endBD.get());
		} else {
			return null;
		}
	}

	public boolean deleteById(int id) {
		endRepo.deleteById(id);
		return true;
	}
}
