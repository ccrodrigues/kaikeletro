package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.Produto;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

	//SELECT * FROM categoria WHERE nome LIKE
	List<Categoria> findByNomeLike(String nome);
}
