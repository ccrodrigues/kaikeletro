package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Cidade;
import com.kaikeletro.domain.Estado;


@Repository
public interface EstadoRepository extends JpaRepository<Estado, Integer> {

}