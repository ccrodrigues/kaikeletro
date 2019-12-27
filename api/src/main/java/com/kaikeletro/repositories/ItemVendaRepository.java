package com.kaikeletro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Item_Venda;

@Repository
public interface ItemVendaRepository extends JpaRepository <Item_Venda, Integer> {}


