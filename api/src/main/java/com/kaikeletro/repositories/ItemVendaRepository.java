package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.ItemVenda;

@Repository
public interface ItemVendaRepository extends JpaRepository <ItemVenda, Integer> {}


