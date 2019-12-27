package com.kaikeletro.repositories;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Produto;
import com.kaikeletro.dto.ProdutoDto;

@Repository
public interface ProdutoRepository extends JpaRepository <Produto, Integer>{
	
	//SELECT * FROM produto WHERE nome LIKE
	List<Produto> findByNomeLike(String nome);
	
<<<<<<< HEAD
	List<Produto> findByCategorias(int categoria);
}
=======
	//"SELECT DISTINCT obj FROM Produto obj INNER JOIN obj.categorias cat WHERE obj.nome LIKE %:nomeCategoria%"
	Page<Produto> findDistinctByCategoriasNomeContaining(@Param("nomeCategoria")String nomeCategoria, Pageable pageRequest);
}
>>>>>>> 197f5c863e55846ef9232aeb1eabd5123487e8c0
