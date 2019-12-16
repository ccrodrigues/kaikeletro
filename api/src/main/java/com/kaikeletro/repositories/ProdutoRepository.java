package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaikeletro.domain.Produto;

public interface ProdutoRepository extends JpaRepository <Produto, Integer>{
	

}
