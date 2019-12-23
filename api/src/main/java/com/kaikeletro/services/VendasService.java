package com.kaikeletro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Vendas;
import com.kaikeletro.repositories.VendasRepository;

@Service
public class VendasService {
	
	@Autowired
	private VendasRepository vendasRepo;
	
	//Buscar todas as vendas
	public List<Vendas> getAll() {
		List<Vendas> vendas = vendasRepo.findAll();
		return vendas;
	}
	
	public Vendas save(Vendas vendas) {
		return vendasRepo.save(vendas);
	}


}
