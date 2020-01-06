package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Venda;

@Repository
public interface VendasRepository extends JpaRepository<Venda, Integer> {
	

}
