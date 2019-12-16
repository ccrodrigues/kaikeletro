package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaikeletro.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

}
