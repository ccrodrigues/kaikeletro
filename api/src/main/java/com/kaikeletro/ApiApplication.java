package com.kaikeletro;

import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.domain.Vendas;
import com.kaikeletro.repositories.CategoriaRepository;
import com.kaikeletro.repositories.ImagemProdutoRepository;
import com.kaikeletro.repositories.ProdutoRepository;
import com.kaikeletro.repositories.UsuarioRepository;
import com.kaikeletro.repositories.VendasRepository;

@SpringBootApplication
public class ApiApplication implements CommandLineRunner{
	
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

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
		
	}
	
	@Override
	public void run(String... args) throws Exception {
		this.produtoCategoriaDemo();
		this.vendasProdutoUsuario();
		
	}
	
	//Teste de incluir Vendas com produtos e usuários
	private void vendasProdutoUsuario() {
		Vendas v1 = new Vendas();
		Usuario u1 = new Usuario();
		Produto p1 = new Produto();
		Categoria c1 = new Categoria();
		ImagemProd a1 = new ImagemProd();
		
		//Atributos categoria
		c1.setNome("Eletronicos");
		
		//Atributos usuario
		u1.setCelular("1148748-8743");
		u1.setCpf("123456786");
		u1.setDataDeNascimento("30/01/1998");
		u1.setEmail("usuario@email.com");
		u1.setNome("Usuario 01");
		u1.setSenha("123");
		u1.setTelefone("1345365328");
		
		//Atributos imagem
		a1.setImagemProduto("https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
		a1.setDescricaoImagem("NoteBook Lenovo");
		a1.setNomeImagem("note");
		
		//Atributos produtos
		p1.setNome("Notebook");
		p1.setDescricao("Notebook Lenovo E490 - Core I7");
		p1.setPreco(6000);
		p1.setCategorias(Arrays.asList(c1));
		p1.setImagens(Arrays.asList(a1));
		
		//Atributos vendas
		v1.setValor(5000.0);
		v1.setStatus("Ativo");
		v1.setTotalItens(10);
		v1.setTotalProdutos(Arrays.asList(p1));
		v1.setUsuario(u1);
		v1.setDataVenda(new Date());
		v1.setTotalVendas(5);
		
		categoriaRepository.save(c1);
		imagemRepository.saveAll(Arrays.asList(a1));
		usuarioRepository.save(u1);
		produtoRepository.save(p1);
		vendasRepository.save(v1);
	}
	
	//Teste de Produtos e Categorias
	private void produtoCategoriaDemo() {
	Categoria c1 = new Categoria();
	c1.setNome("Microcomputador");
	
	ImagemProd a1 = new ImagemProd();
	a1.setImagemProduto("https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
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
