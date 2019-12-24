package com.kaikeletro.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.repositories.CategoriaRepository;
import com.kaikeletro.repositories.ImagemProdutoRepository;
import com.kaikeletro.repositories.ProdutoRepository;

@Service
public class PopulateDBService {

	@Autowired
	ProdutoRepository produtoRepository;

	@Autowired
	CategoriaRepository categoriaRepository;

	@Autowired
	ImagemProdutoRepository imagemRepository;

	// Teste de Produtos e Categorias
	public void produtoCategoriaDemo() {
		/*
		 * Categoria cat1 = new Categoria(null,"notebook"); Categoria cat2 = new
		 * Categoria(null,"celular"); Categoria cat3 = new
		 * Categoria(null,"informatica"); Categoria cat4 = new Categoria(null,"tv");
		 * Categoria cat5 = new Categoria(null,"eletrodomestico");
		 * 
		 * ImagemProduto a1 = new ImagemProduto(); a1.setImagemProduto(
		 * "https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg"
		 * ); a1.setDescricaoImagem("Notebook Lenovo"); a1.setNomeImagem("note");
		 * 
		 * Produto prod1 = new Produto(null,"Notebook 1", 6000.00);
		 * 
		 * Produto prod2 = new Produto(null,"Celular 2", 1000.00);
		 * 
		 * Produto prod3 = new Produto(null,"Geladeira 3", 3000.00);
		 * 
		 * cat1.getProdutos().addAll(Arrays.asList(prod1));
		 * cat3.getProdutos().addAll(Arrays.asList(prod1,prod2));
		 * cat5.getProdutos().addAll(Arrays.asList(prod3));
		 * 
		 * imagemRepository.saveAll(Arrays.asList(a1));
		 * categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3, cat4, cat5));
		 * produtoRepository.saveAll(Arrays.asList(prod1,prod2,prod3));
		 */

		Categoria cat1 = new Categoria(null, "Informática");
		Categoria cat2 = new Categoria(null, "Escritório");		
		Categoria cat3 = new Categoria(null, "Coisas de Casa");		
		Categoria cat4 = new Categoria(null, "Eletrônicos");
		Categoria cat5 = new Categoria(null, "Jardinagem");
		Categoria cat6 = new Categoria(null, "Decoração");
		Categoria cat7 = new Categoria(null, "Perfumaria");

		Produto p1 = new Produto( "Notebook Lenovo", 6000.00);
		Produto p2 = new Produto( "Impressora HP Colorida", 800.00);
		Produto p3 = new Produto( "Mouse Sem Fio", 80.00);		
		Produto p4 = new Produto( "Toalha de rosto", 50.00);
		Produto p5 = new Produto( "Colcha Francesa", 200.00);
		Produto p6 = new Produto( "TV 55 Polegadas Kaik Eletro", 9200.00);					
		Produto p7 = new Produto( "Light and Blue", 500.00);

		cat1.getProdutos().addAll(Arrays.asList(p1, p2, p3));
		cat2.getProdutos().addAll(Arrays.asList(p2));
		cat3.getProdutos().addAll(Arrays.asList(p4, p5));
		cat4.getProdutos().addAll(Arrays.asList(p1, p2, p3, p6));
				
		cat7.getProdutos().addAll(Arrays.asList(p7));

		p1.getCategorias().addAll(Arrays.asList(cat1, cat4));
		p2.getCategorias().addAll(Arrays.asList(cat1, cat2, cat4));
		p3.getCategorias().addAll(Arrays.asList(cat1, cat4));
		
		p4.getCategorias().addAll(Arrays.asList(cat3));
		p5.getCategorias().addAll(Arrays.asList(cat3));
		p6.getCategorias().addAll(Arrays.asList(cat4));
					
		p7.getCategorias().addAll(Arrays.asList(cat7));

		categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3, cat4, cat5, cat6, cat7));
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7));

	}
}
