package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.EnderecoUsuario;

@Repository
public interface EnderecoUsuarioRepository extends JpaRepository<EnderecoUsuario, Integer> {

	//@Query("select s.email from endereco_usuario d inner join usuario s on d.id_usuario = s.id where d.id_endereco = :id")
	
	//public List<EnderecoUsuario> acharEmail(int id);
	
	public List<EnderecoUsuario> findByUsuariosEmailContaining(String email);
	
	public void deleteByIdEndereco(int id);
		
}
