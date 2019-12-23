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
public class ApiApplication implements CommandLineRunner{
	
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
		 produtoCategoriaDemos();

	}

	private void vendasProdutoUsuario() {
//		Vendas v1 = new Vendas();
//		Usuario u1 = new Usuario();
//		Produto p1 = new Produto();
//		Categoria c1 = new Categoria();
//		ImagemProd a1 = new ImagemProd();
//
//		// Atributos categoria
//		c1.setNome("Eletronicos");
//
//		// Atributos usuario
//		u1.setCelular("1148748-8743");
//		u1.setCpf("123456786");
//		u1.setDataDeNascimento("30/01/1998");
//		u1.setEmail("usuario@email.com");
//		u1.setNome("Usuario 01");
//		u1.setSenha("123");
//		u1.setTelefone("1345365328");
//
//		// Atributos imagem
//		a1.setImagemProduto(
//				"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
//		a1.setDescricaoImagem("NoteBook Lenovo");
//		a1.setNomeImagem("note");
//
//		// Atributos produtos
//		p1.setNome("Notebook");
//		p1.setDescricao("Notebook Lenovo E490 - Core I7");
//		p1.setPreco(6000);
//		p1.setCategorias(Arrays.asList(c1));
//		p1.setImagens(Arrays.asList(a1));
//
//		// Atributos vendas
//		v1.setValor(5000.0);
//		v1.setStatus("Ativo");
//		v1.setTotalItens(10);
//		v1.setTotalProdutos(Arrays.asList(p1));
//		v1.setUsuario(u1);
//		v1.setDataVenda(new Date());
//		v1.setTotalVendas(5);
//
//		categoriaRepository.save(c1);
//		imagemRepository.saveAll(Arrays.asList(a1));
//		usuarioRepository.save(u1);
//		produtoRepository.save(p1);
//		vendasRepository.save(v1);
	}

	// Teste de Produtos e Categorias
	
	private void produtoCategoriaDemos() {
		Categoria c1 = new Categoria();
		c1.setNome("Microcomputador");

		ImagemProd a1 = new ImagemProd();
		a1.setImagemProduto(
				"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
		a1.setDescricaoImagem("NoteBook Lenovo");
		a1.setNomeImagem("note");
		ImagemProd a2 = new ImagemProd();
		a2.setImagemProduto(
				"data:image/png;base64,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");
		a2.setDescricaoImagem("NoteBook Lenovo");
		a2.setNomeImagem("note");
		ImagemProd a3 = new ImagemProd();
		a3.setImagemProduto(
				"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3A7qWWO51mQF3eVAoqdad8elhthCeZrXTxpitsq-_9xNvIPur_tGGSEvFTCYk&usqp=CAc");
		a3.setDescricaoImagem("NoteBook Lenovo");
		a3.setNomeImagem("note");

		imagemRepository.saveAll(Arrays.asList(a1));
		imagemRepository.saveAll(Arrays.asList(a2));
		imagemRepository.saveAll(Arrays.asList(a3));

		Produto p1 = new Produto();
		p1.setNome("Notebook");
		p1.setDescricao("Notebook Lenovo E490 - Core I7");
		p1.setPreco(6000);
		p1.setCategorias(Arrays.asList(c1));
		p1.setImagens(Arrays.asList(a1, a2, a3));

		categoriaRepository.saveAll(Arrays.asList(c1));
		produtoRepository.saveAll(Arrays.asList(p1));

	}
	
	
	
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
