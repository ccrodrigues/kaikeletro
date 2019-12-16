package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaikeletro.domain.Produto;

public interface ProdutoRepository extends JpaRepository <Produto, Integer>{
	
	//SELECT * FROM produto WHERE nome LIKE
	List<Produto> findByNomeLike(String nome);
}
