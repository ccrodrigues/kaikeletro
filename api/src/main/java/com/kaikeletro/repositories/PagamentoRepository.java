package com.kaikeletro.repositories;

import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaikeletro.domain.Cliente;
import com.kaikeletro.domain.Pagamento;
import com.kaikeletro.domain.Pedido;

@Repository
public interface PagamentoRepository extends JpaRepository<Pagamento, Integer> {

	@Transactional(readOnly=true)
	Page<Pedido> findByCliente(Cliente cliente, Pageable pageRequest);
}