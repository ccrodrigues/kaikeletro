package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Produto;
import com.kaikeletro.dto.ProdutoDto;

@Repository
public interface ProdutoRepository extends JpaRepository <Produto, Integer>{
	
	//SELECT * FROM produto WHERE nome LIKE
	List<Produto> findByNomeLike(String nome);
	
	List<Produto> findByCategorias(int categoria);
}