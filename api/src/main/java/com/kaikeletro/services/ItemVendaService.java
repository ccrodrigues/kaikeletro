package com.kaikeletro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.ItemVenda;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Venda;
import com.kaikeletro.dto.ItemVendaDTO;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.VendasRepository;

@Service
public class ItemVendaService {

	@Autowired
	private ItemVendaRepository itemRepo;

	@Autowired
	private VendasRepository vendasRepo;

	// Buscar todas as vendas
	public List<ItemVenda> getAll() {
		List<ItemVenda> itens = itemRepo.findAll();
		return itens;
	}

	public ItemVenda save(ItemVenda itens) {
		return itemRepo.save(itens);
	}

	public List<ItemVenda> saveItem(List<ItemVenda> itens) {

		List<ItemVenda> itensVenda = null;

		try {

			Venda venda = new Venda();

			venda = itens.get(0).getVenda();

			vendasRepo.save(venda);

			itensVenda = itemRepo.saveAll(itens);

		}

		catch (Exception e) {
			System.err.println(e);
		}

		return itensVenda;
	}
	
}
