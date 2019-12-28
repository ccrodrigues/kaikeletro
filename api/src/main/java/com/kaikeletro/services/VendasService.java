package com.kaikeletro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaikeletro.domain.Item_Venda;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.domain.Vendas;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.UsuarioRepository;
import com.kaikeletro.repositories.VendasRepository;

@Service
public class VendasService {

	@Autowired
	private VendasRepository vendasRepo;
	
	@Autowired
	private UsuarioRepository userRepo;

	@Autowired
	private ItemVendaRepository itemRepo;

	@Autowired
	private ItemVendaService itemService;

	// Buscar todas as vendas
	public List<Vendas> getAll() {
		List<Vendas> vendas = vendasRepo.findAll();

		return vendas;
	}

	@Transactional
	public Vendas createVenda(Vendas vendas) {
		
		Vendas sell = new Vendas();
		Usuario user = new Usuario();
		String email;
		
	try {
		
		email = vendas.getUsuario().getEmail();
		
		user = userRepo.findByEmail(email);
		vendas.setUsuario(user);
		
		sell = vendasRepo.save(vendas);	
		
	   for(Item_Venda item : vendas.getItem()) {
		   item.setVenda(vendas);
		   itemRepo.save(item);
	   }
	} catch(Exception e) {
		System.err.println(e);
	}
	
	   return sell;
	}
}
