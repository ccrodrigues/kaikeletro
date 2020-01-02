package com.kaikeletro;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.EnderecoUsuario;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.Item_Venda;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.domain.Vendas;
import com.kaikeletro.enumeration.StatusPagamento;
import com.kaikeletro.enumeration.StatusVendas;
import com.kaikeletro.repositories.CategoriaRepository;
import com.kaikeletro.repositories.EnderecoUsuarioRepository;
import com.kaikeletro.repositories.ImagemProdutoRepository;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.ProdutoRepository;
import com.kaikeletro.repositories.UsuarioRepository;
import com.kaikeletro.repositories.VendasRepository;
import com.kaikeletro.services.PopularBancoService;

@SpringBootApplication
public class ApiApplication implements CommandLineRunner {

	@Autowired
	ProdutoRepository produtoRepository;

	@Autowired
	CategoriaRepository categoriaRepository;

	@Autowired
	ImagemProdutoRepository imagemRepository;
	
	@Autowired
	VendasRepository vendasRepository;
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder; 
	
	@Autowired
	EnderecoUsuarioRepository enderecoRepository;

	@Autowired
	ItemVendaRepository itemRepository;
	
	@Autowired
	PopularBancoService popularBanco;


	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		popularBanco.produtoCategoriaDemo();				
	}
}
