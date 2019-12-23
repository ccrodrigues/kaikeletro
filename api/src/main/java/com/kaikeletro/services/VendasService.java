package com.kaikeletro.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Item_Venda;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Vendas;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.VendasRepository;

@Service
public class VendasService {
	
	@Autowired
	private VendasRepository vendasRepo;
	
	@Autowired
	private ItemVendaRepository itemRepo;
	
	@Autowired
	private ItemVendaService itemService;
	
	//Buscar todas as vendas
	public List<Vendas> getAll() {
		List<Vendas> vendas = vendasRepo.findAll();
		
		return vendas;
	}
	
	public Vendas createVenda(Vendas vendas) {
		
		return vendasRepo.save(vendas);		
	}
}
