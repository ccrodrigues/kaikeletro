package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.ImagemProd;

@Repository
public interface ImagemProdutoRepository extends JpaRepository<ImagemProd, Integer>{

}
