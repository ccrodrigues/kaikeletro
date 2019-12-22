package com.kaikeletro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Item_Venda;
import com.kaikeletro.domain.Vendas;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.VendasRepository;

@Service
public class ItemVendaService {
	
	@Autowired
	private ItemVendaRepository itemRepo;
	
	//Buscar todas as vendas
	public List<Item_Venda> getAll() {
		List<Item_Venda> itens = itemRepo.findAll();
		return itens;
	}
	
	public Item_Venda save(Item_Venda itens) {
		return itemRepo.save(itens);
	}
	
	
	
	public Item_Venda saveItens(List<Item_Venda> itens) {
		return (Item_Venda) itemRepo.saveAll(itens);
	}

}
