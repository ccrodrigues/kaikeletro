package com.kaikeletro.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository <Usuario, Integer>{

	
	
	
}
