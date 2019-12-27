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


	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
<<<<<<< HEAD
		this.produtoCategoriaDemos();
		this.produtoCategoriaDemo();
<<<<<<< HEAD

	}

	// Teste de incluir Vendas com produtos e usuários
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
=======
=======

		this.produtoCategoriaDemo();
		
		Usuario u1 = new Usuario();
		EnderecoUsuario end1 = new EnderecoUsuario();
		
		u1.setCelular("1148748-8743");
		u1.setCpf("123456786");
		u1.setDataDeNascimento("30/01/1998");
		u1.setEmail("a@a.com");
		u1.setNome("Usuario 01");
		u1.setSenha(bCryptPasswordEncoder.encode("123"));
		u1.setTelefone("1345365328");
		
		usuarioRepository.save(u1);
		
		end1.setCep("03254010");
		end1.setCidade("São Paulo");
		end1.setEstado("SP");
		end1.setLogradouro("Av. nove de julho");
		end1.setNumero("15A");
		end1.setFk_Usuario(u1);
		
		enderecoRepository.save(end1);
	
>>>>>>> 487b46430ff796f5cba33b55886aecf07756b04d
		//this.vendasProdutoUsuario();

		//this.produtoCategoriaDemo();
		//this.produtoCategoriaDemo();
		//this.produtoCategoriaDemo();
		this.produtoCategoriaDemo();
		this.vendasProdutoUsuario();

	}
	
	//Teste de incluir Vendas com produtos e usuários
	private void vendasProdutoUsuario() {
		Vendas v1 = new Vendas();
		Vendas v2 = new Vendas();
		Usuario u1 = new Usuario();
		Produto p1 = new Produto();
<<<<<<< HEAD
>>>>>>> 38a45ebc96ea29f4f853123ed03701efc8f579f0
=======
		Produto p2 = new Produto();
		Produto p3 = new Produto();
>>>>>>> 487b46430ff796f5cba33b55886aecf07756b04d
		Categoria c1 = new Categoria();
		c1.setNome("Microcomputador");

		ImagemProd a1 = new ImagemProd();
<<<<<<< HEAD
		a1.setImagemProduto(
				"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
=======
		Item_Venda item = new Item_Venda();
		Item_Venda item2 = new Item_Venda();
		Item_Venda item3 = new Item_Venda();
		Item_Venda item4 = new Item_Venda();
		ArrayList<Item_Venda>itemArray = new ArrayList();
		ArrayList<Item_Venda>itemArray2 = new ArrayList();
		
		
		//Atributos categoria
		c1.setNome("Eletronicos");
		
		//Atributos usuario
		u1.setCelular("1148748-8743");
		u1.setCpf("123456786");
		u1.setDataDeNascimento("30/01/1998");
		u1.setEmail("a@a.com");
		//u1.setDataDeNascimento("30/01/1998");
		u1.setEmail("usuario@email.com");
		u1.setNome("Usuario 01");
		u1.setSenha(bCryptPasswordEncoder.encode("123"));
		u1.setTelefone("1345365328");
		
		//Atributos imagem
		a1.setImagemProduto("https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
>>>>>>> 487b46430ff796f5cba33b55886aecf07756b04d
		a1.setDescricaoImagem("NoteBook Lenovo");
		a1.setNomeImagem("note");
		ImagemProd a2 = new ImagemProd();
		a2.setImagemProduto(
				"https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjXysa_rsLmAhVvE7kGHe6KALIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.saldaodainformatica.com.br%2Fnotebook%2Fnotebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10&psig=AOvVaw0RIDyiTBk1NBb4GQCougOm&ust=1576867274690152");
		a2.setDescricaoImagem("NoteBook Lenovo");
		a2.setNomeImagem("note");
		ImagemProd a3 = new ImagemProd();
		a3.setImagemProduto(
				"https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiLiue_rsLmAhVfILkGHRWLDAEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.zoom.com.br%2Fnotebook%2Fnotebook-lenovo-ideapad-330-intel-core-i5-8250u-15-6-8gb-hd-1-tb-windows-10-8-geracao&psig=AOvVaw2RSChRio2S0mO8dEUyPBdn&ust=1576867275170134");
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
<<<<<<< HEAD
		p1.setImagens(Arrays.asList(a1, a2, a3));

		categoriaRepository.saveAll(Arrays.asList(c1));
		produtoRepository.saveAll(Arrays.asList(p1));

	}

=======
		p1.setImagens(Arrays.asList(a1));
		
		
		p2.setNome("Celular");
		p2.setDescricao("Iphone x");
		p2.setPreco(6000);
		p2.setCategorias(Arrays.asList(c1));
		p2.setImagens(Arrays.asList(a1));
		
		//Atributos vendas
		v1.setValor(5000.0);
		v1.setStatus(StatusVendas.Concluida);
		v1.setTotalItens(10);
		v1.setPagamento(StatusPagamento.Aguardando);


		//v1.setTotalProdutos(Arrays.asList(p1));

		v1.setUsuario(u1);
				
		item.setProduto(p1);
		item.setQuantidade(2);
		item.setVenda(v1);
		
		item2.setProduto(p2);
		item2.setQuantidade(1);
		item2.setVenda(v1);
		
		item3.setProduto(p1);
		item3.setQuantidade(2);
		item3.setVenda(v2);
		
		item4.setProduto(p2);
		item4.setQuantidade(5);
		item4.setVenda(v2);
		
		
		itemArray.add(item);
		itemArray.add(item2);
		itemArray2.add(item3);
		itemArray2.add(item4);
		
		v1.setItem(itemArray);
		v2.setItem(itemArray2);
		
		categoriaRepository.save(c1);
		imagemRepository.saveAll(Arrays.asList(a1));
		usuarioRepository.save(u1);
		produtoRepository.save(p1);
		produtoRepository.save(p2);
		vendasRepository.save(v1);
<<<<<<< HEAD
	}*/
>>>>>>> 38a45ebc96ea29f4f853123ed03701efc8f579f0
=======
		
		vendasRepository.save(v2);
		itemRepository.save(item);
		itemRepository.save(item2);
		itemRepository.save(item3);
		itemRepository.save(item4);
	}

	
	//Teste de Produtos e Categorias
	private void produtoCategoriaDemo() {
	Categoria c1 = new Categoria();
	c1.setNome("Microcomputador");
	
	ImagemProd a1 = new ImagemProd();
	a1.setImagemProduto("https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");
	a1.setDescricaoImagem("NoteBook Lenovo");
	a1.setNomeImagem("note");
		
	for (int i =3 ; i < 18 ; i++) {

		Produto prod = new Produto();
		prod.setNome("Notebook " + i);
		prod.setDescricao("Notebook Kaik i171");
		prod.setCategorias(Arrays.asList(c1));
		prod.setDescricao("Notebook Kaik i17i");
		prod.setPreco(1000);

		prod.setImagens(Arrays.asList(a1));
		prod.setPreco(5000);
		imagemRepository.saveAll(Arrays.asList(a1));
		produtoRepository.saveAll(Arrays.asList(prod));
		produtoRepository.save(prod);
	}
	
	}	


}
