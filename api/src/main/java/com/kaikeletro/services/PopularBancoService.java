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
		Categoria cat1 = new Categoria(0, "Informática");
		Categoria cat2 = new Categoria(1, "Escritório");		
		Categoria cat3 = new Categoria(2, "Coisas de Casa");		
		Categoria cat4 = new Categoria(3, "Eletrônicos");
		Categoria cat5 = new Categoria(4, "Jardinagem");
		Categoria cat6 = new Categoria(5, "Decoração");
		Categoria cat7 = new Categoria(6, "Perfumaria");
		Categoria cat8 = new Categoria(7, "Celular");
		Categoria cat9 = new Categoria(8, "Eletrodoméstico");
		Categoria cat10 = new Categoria(9, "melhores-ofertas");

		Produto p1 = new Produto( 0,"Notebook Lenovo", 6000.00);
		Produto p2 = new Produto( 1,"Impressora HP Colorida", 800.00);
		Produto p3 = new Produto( 2,"Mouse Sem Fio", 80.00);		
		Produto p4 = new Produto( 3,"Toalha de rosto", 50.00);
		Produto p5 = new Produto( 4,"Colcha Francesa", 200.00);
		Produto p6 = new Produto( 5,"TV 55 Polegadas Kaik Eletro", 9200.00);					
		Produto p7 = new Produto( 6,"Light and Blue", 500.00);
		Produto p8 = new Produto( 7,"Xiaomi 11 PRO", 3000.00);
		Produto p9 = new Produto( 8,"Geladeira Frost Free", 9000.00);
		
		cat1.setProdutos(Arrays.asList(p1,p2,p3));
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
		
		ImagemProd a1 = new ImagemProd(); 
		 a1.setImagemProduto(
		"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg"
		); 
		a1.setDescricaoImagem("Notebook Lenovo");
		a1.setNomeImagem("imagem 1");
		
		ImagemProd a2 = new ImagemProd(); 
		 a2.setImagemProduto(
		"https://images-na.ssl-images-amazon.com/images/I/61minrTDZmL._SL1000_.jpg"
		); 
		a2.setDescricaoImagem("Impressora HP");
		a2.setNomeImagem("imagem 2");
		
		p1.setImagens(Arrays.asList(a1));
		p2.setImagens(Arrays.asList(a2));
		p3.setImagens(Arrays.asList(a1));
		p4.setImagens(Arrays.asList(a2));
		p5.setImagens(Arrays.asList(a1));
		p6.setImagens(Arrays.asList(a2));
		p7.setImagens(Arrays.asList(a1));
		p8.setImagens(Arrays.asList(a2));
		p9.setImagens(Arrays.asList(a1));

		/*imagemRepository.saveAll(Arrays.asList(a1, a2));
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9,cat10));
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7,p8,p9));*/
		
		imagemRepository.save(a1);
		categoriaRepository.save(cat1);
		categoriaRepository.save(cat4);
		produtoRepository.save(p1);
	}
}
