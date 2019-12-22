package com.kaikeletro.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.kaikeletro.domain.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

	//SELECT * FROM categoria WHERE nome LIKE
	@Transactional(readOnly = true)	
	List<Categoria> findByNomeContains(String nome);
}
