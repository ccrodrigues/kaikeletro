package com.kaikeletro.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.UserTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kaikeletro.domain.ItemVenda;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.domain.Venda;
import com.kaikeletro.dto.ItemVendaDTO;
import com.kaikeletro.dto.VendaDTO;
import com.kaikeletro.enumeration.StatusVendas;
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
	@Transactional(readOnly = true)
	//Transaction apenas como leitura para melhorar desempenho de leitura
	public List<Venda> getAll() {
		List<Venda> vendas = vendasRepo.findAll();

		return vendas;
	}

	public Venda createVenda(Venda vendas) {

		Venda sell = new Venda();
		Usuario user = new Usuario();
		String email;

		try {

			//buscando o usuário por email
			email = vendas.getUsuario().getEmail();

			user = userRepo.findByEmail(email);
			vendas.setUsuario(user);

			//salvando vendas
			sell = vendasRepo.save(vendas);

			//salvando itens das vendas
			for (ItemVenda item : vendas.getItem()) {
				item.setVenda(vendas);
				itemRepo.save(item);
			}
			

		} catch (Exception e) {
			System.err.println(e);
		}

		return sell;
	}
	

	public Optional<Venda> findById(int id) {
		return vendasRepo.findById(id);
	}
	

	public boolean deleteById(int id) {
		vendasRepo.deleteById(id);
		return true;
	}
	
	}

			
