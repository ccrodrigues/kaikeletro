package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	Usuario findOneByEmailAndSenha(String email, String senha);

	public Usuario findByEmail(String email);

	List<Usuario> findByNomeContainsIgnoreCase(String nomeBusca);

	Usuario findByEmailIgnoreCase(String email);

	List<Usuario> findBycpf(String cpf);

}
