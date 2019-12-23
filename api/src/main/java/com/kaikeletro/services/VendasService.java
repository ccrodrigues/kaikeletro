package com.kaikeletro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Item_Venda;
import com.kaikeletro.domain.Vendas;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.VendasRepository;

@Service
public class VendasService {

	@Autowired
	private VendasRepository vendasRepo;

	private ItemVendaRepository itemRepo;

	// Buscar todas as vendas
	public List<Vendas> getAll() {
		List<Vendas> vendas = vendasRepo.findAll();
		return vendas;
	}

	public Vendas createVenda(Vendas vendas) {
		System.out.println("ANTES DO METODO SAVE-------------------------------------------------------------");
		Vendas v = vendasRepo.save(vendas);
		System.out.println("-------------------------------------------------------------DEPOIS DO METODO SAVE");
		

		List<Item_Venda> listaItemVenda = vendas.getItem();

		for (Item_Venda obj_item_Venda : listaItemVenda) {
			System.out.println("ENTRA NO FOR ----------------------------");
			itemRepo.save(obj_item_Venda);
		}

		return v;
	}

}
