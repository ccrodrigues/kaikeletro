package com.kaikeletro.repositories;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository <Produto, Integer>{
	
	//SELECT * FROM produto WHERE nome LIKE
	List<Produto> findByNomeContaining(String nomeBusca);
	
	List<Produto> findByCategorias(int categoria);

	//"SELECT DISTINCT obj FROM Produto obj INNER JOIN obj.categorias cat WHERE obj.nome LIKE %:nomeCategoria%"
	Page<Produto> findDistinctByCategoriasNomeContaining(@Param("nomeCategoria")String nomeCategoria, Pageable pageRequest);
	
	//paginação de produtos pelo nome
	Page<Produto> findDistinctByNomeContaining(@Param("nome")String nomeBusca, Pageable pageRequest);
		
}

