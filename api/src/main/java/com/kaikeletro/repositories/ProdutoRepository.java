package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.kaikeletro.domain.Produto;

public interface ProdutoRepository extends JpaRepository <Produto, Integer>{
	
	//SELECT * FROM produto WHERE nome LIKE
	List<Produto> findByNomeLike(String nome);
		
	//@Query("SELECT DISTINCT obj FROM Produto obj INNER JOIN obj.categorias cat WHERE obj.nome LIKE %:nomeCategoria%")
	Page<Produto> findDistinctByCategoriasNomeContaining(@Param("nomeCategoria") String nomeCategoria, Pageable pageRequest);
}
