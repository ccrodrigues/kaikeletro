package com.kaikeletro.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.EnderecoUsuario;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.exception.TratamentoDeErros;
import com.kaikeletro.repositories.EnderecoUsuarioRepository;

@Service
public class EnderecoUsuarioService {
	
	@Autowired
	private EnderecoUsuarioRepository endRepo;
	
	public List<EnderecoUsuario> getAll() {
		List<EnderecoUsuario> enderecos = endRepo.findAll();
		return enderecos;
	}

	public Optional<EnderecoUsuario> findById(int id) {
		return endRepo.findById(id);
	}
	public List<EnderecoUsuario> findByUsuariosEmailContaining(String email) {
		return endRepo.findByUsuariosEmailContaining(email);
	}

	public EnderecoUsuario save(EnderecoUsuario end) {
		return endRepo.save(end);
	}
	
	public EnderecoUsuario updatebyID(EnderecoUsuario end, int id) {

		Optional<EnderecoUsuario> endBD = endRepo.findById(id);

		if (endBD.isPresent() == true) {
			//endBD.get().setIdEndereco(end.getIdEndereco());
			endBD.get().setCep(end.getCep());
			endBD.get().setCidade(end.getCidade());
			endBD.get().setEstado(end.getEstado());
			//endBD.get().setUsuarios(end.getUsuarios());
			endBD.get().setLogradouro(end.getLogradouro());
			endBD.get().setNumero(end.getNumero());
			endBD.get().setComplemento(end.getComplemento());
			return endRepo.save(endBD.get());
		} else {
			throw new TratamentoDeErros(id, new EnderecoUsuario());
		}
	}

	public boolean deleteById(int id) {
		endRepo.deleteById(id);
		return true;
	}
}
