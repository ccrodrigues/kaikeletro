package com.kaikeletro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Item_Venda;
import com.kaikeletro.domain.Vendas;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.VendasRepository;

import com.kaikeletro.repositories.ItemVendaRepository;


@Service
public class ItemVendaService {
	
	@Autowired
	private ItemVendaRepository itemRepo;
	
	@Autowired
	private VendasRepository vendasRepo;
	
	//Buscar todas as vendas
	public List<Item_Venda> getAll() {
		List<Item_Venda> itens = itemRepo.findAll();
		return itens;
	}
	
	public Item_Venda save(Item_Venda itens) {
		return itemRepo.save(itens);
	}
	
	
	
	public Item_Venda saveItens(List<Item_Venda> itens) {
		Vendas venda = new Vendas();
		venda.setItem(itens);
		vendasRepo.save(venda);
		
		//for (Item_Venda obj_item_Venda : itens) {
		//	itemRepo.save(obj_item_Venda);
	//	}
		
		return (Item_Venda) itemRepo.saveAll(itens);
	}


}


