package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaikeletro.domain.Vendas;

public interface VendasRepository extends JpaRepository<Vendas, Integer> {
	

}
