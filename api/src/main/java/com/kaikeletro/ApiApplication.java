package com.kaikeletro;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.repositories.CategoriaRepository;
import com.kaikeletro.repositories.ImagemProdutoRepository;
import com.kaikeletro.repositories.ProdutoRepository;

@SpringBootApplication
public class ApiApplication implements CommandLineRunner {

	@Autowired
	ProdutoRepository produtoRepository;

	@Autowired
	CategoriaRepository categoriaRepository;

	@Autowired
	ImagemProdutoRepository imagemRepository;

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		this.produtoCategoriaDemo();
		this.produtoCategoriaDemo();
		
		

	}

	// Teste de Produtos e Categorias
	private void produtoCategoriaDemo() {
		Categoria c1 = new Categoria();
		c1.setNome("Microcomputador");

		ImagemProd a1 = new ImagemProd();
		a1.setImagemProduto(
				"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
		a1.setDescricaoImagem("NoteBook Lenovo");
		a1.setNomeImagem("note");

		Produto p1 = new Produto();
		p1.setNome("Notebook");
		p1.setDescricao("Notebook Lenovo E490 - Core I7");
		p1.setPreco(6000);
		p1.setCategorias(Arrays.asList(c1));
		p1.setImagens(Arrays.asList(a1));

		categoriaRepository.saveAll(Arrays.asList(c1));
		imagemRepository.saveAll(Arrays.asList(a1));
		produtoRepository.saveAll(Arrays.asList(p1));

	}

}
