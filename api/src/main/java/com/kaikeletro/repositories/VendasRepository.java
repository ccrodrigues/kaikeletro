package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Vendas;

@Repository
public interface VendasRepository extends JpaRepository<Vendas, Integer> {
	

}
