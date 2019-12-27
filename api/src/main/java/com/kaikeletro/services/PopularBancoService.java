package com.kaikeletro.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.repositories.CategoriaRepository;
import com.kaikeletro.repositories.EnderecoUsuarioRepository;
import com.kaikeletro.repositories.ImagemProdutoRepository;
import com.kaikeletro.repositories.ItemVendaRepository;
import com.kaikeletro.repositories.ProdutoRepository;
import com.kaikeletro.repositories.UsuarioRepository;
import com.kaikeletro.repositories.VendasRepository;

@Service
public class PopularBancoService {

	@Autowired
	VendasRepository vendasRepository;

	@Autowired
	UsuarioRepository usuarioRepository;

	@Autowired
	ProdutoRepository produtoRepository;

	@Autowired
	ItemVendaRepository itemRepository;

	@Autowired
	ImagemProdutoRepository imagemRepository;

	@Autowired
	EnderecoUsuarioRepository enderecoRepository;

	@Autowired
	CategoriaRepository categoriaRepository;

	public void produtoCategoriaDemo() {
		/*Categoria cat1 = new Categoria("Informática");
		Categoria cat4 = new Categoria("Eletrônicos");
		Produto p1 = new Produto("Notebook Lenovo", 3000.0);
		ImagemProd a1 = new ImagemProd();
		a1.setImagemProduto(
				"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
		a1.setDescricaoImagem("Notebook Lenovo");
		a1.setNomeImagem("imagem 1");
		
		p1.setImagens(Arrays.asList(a1));
		p1.setCategorias(Arrays.asList(cat1));
		
		categoriaRepository.saveAll(Arrays.asList(cat1, cat4));
		imagemRepository.save(a1);
		produtoRepository.save(p1);*/

		Categoria cat1 = new Categoria("Informática");
		Categoria cat2 = new Categoria("Escritório");		
		Categoria cat3 = new Categoria("Coisas de Casa");		
		Categoria cat4 = new Categoria("Eletrônicos");
		Categoria cat5 = new Categoria("Jardinagem");
		Categoria cat6 = new Categoria("Decoração");
		Categoria cat7 = new Categoria("Perfumaria");
		Categoria cat8 = new Categoria("Celular");
		Categoria cat9 = new Categoria("Eletrodoméstico");
		Categoria cat10 = new Categoria("melhores-ofertas");

		Produto p1 = new Produto("Notebook Lenovo", 6000.00);
		Produto p2 = new Produto("Impressora HP Colorida", 800.00);
		Produto p3 = new Produto("Mouse Sem Fio", 80.00);		
		Produto p4 = new Produto("Toalha de rosto", 50.00);
		Produto p5 = new Produto("Colcha Francesa", 200.00);
		Produto p6 = new Produto("TV 55 Polegadas Kaik Eletro", 9200.00);					
		Produto p7 = new Produto("Light and Blue", 500.00);
		Produto p8 = new Produto("Xiaomi 11 PRO", 3000.00);
		Produto p9 = new Produto("Geladeira Frost Free", 9000.00);
		
		ImagemProd a1 = new ImagemProd(); 
		a1.setImagemProduto(
		"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg"
		); 
		a1.setDescricaoImagem("Notebook Lenovo");
		a1.setNomeImagem("imagem 1");

		cat1.setProdutos(Arrays.asList(p1, p2, p3));
		cat2.setProdutos(Arrays.asList(p2));
		cat3.setProdutos(Arrays.asList(p4, p5));
		cat4.setProdutos(Arrays.asList(p1, p2, p3, p6));
		cat7.setProdutos(Arrays.asList(p7));
		cat8.setProdutos(Arrays.asList(p8));
		cat9.setProdutos(Arrays.asList(p9));
		cat10.setProdutos(Arrays.asList(p7,p8,p9));

		p1.setCategorias(Arrays.asList(cat1, cat4));
		p2.setCategorias(Arrays.asList(cat1, cat2, cat4));
		p3.setCategorias(Arrays.asList(cat1, cat4));
		p4.setCategorias(Arrays.asList(cat3));
		p5.setCategorias(Arrays.asList(cat3));
		p6.setCategorias(Arrays.asList(cat4));
		p7.setCategorias(Arrays.asList(cat7,cat10));
		p8.setCategorias(Arrays.asList(cat8,cat10));
		p9.setCategorias(Arrays.asList(cat9,cat10));
		
		p1.setImagens(Arrays.asList(a1));
		p2.setImagens(Arrays.asList(a1));
		p3.setImagens(Arrays.asList(a1));
		p4.setImagens(Arrays.asList(a1));
		p5.setImagens(Arrays.asList(a1));
		p6.setImagens(Arrays.asList(a1));
		p7.setImagens(Arrays.asList(a1));
		p8.setImagens(Arrays.asList(a1));
		p9.setImagens(Arrays.asList(a1));
		
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9,cat10));
		imagemRepository.saveAll(Arrays.asList(a1));
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7,p8,p9));
	}
}
