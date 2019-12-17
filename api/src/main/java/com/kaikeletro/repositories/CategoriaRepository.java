package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.Produto;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

	//SELECT * FROM categoria WHERE nome LIKE
	List<Categoria> findByNomeContains(String nome);
}
