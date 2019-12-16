package com.kaikeletro;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.repositories.CategoriaRepository;
import com.kaikeletro.repositories.ProdutoRepository;

@SpringBootApplication
public class ApiApplication implements CommandLineRunner{
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@Autowired
	CategoriaRepository categoriaRepository;

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		this.produtoCategoriaDemo();
		
	}
	
	private void produtoCategoriaDemo() {
	Categoria c1 = new Categoria();
	c1.setNome("Eletrônico");
	
	Produto p1 = new Produto();
	p1.setNome("Notebook");
	p1.setDescricao("Notebook Lenovo E490 - Core I7");
	p1.setPreco(6000);
	p1.setCategorias(Arrays.asList(c1));
	
	categoriaRepository.saveAll(Arrays.asList(c1));
	produtoRepository.saveAll(Arrays.asList(p1));
	
	}	
}
