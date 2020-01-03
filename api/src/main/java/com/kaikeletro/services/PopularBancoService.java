package com.kaikeletro.services;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	public void produtoCategoriaDemo() {
		// Criando Categorias
		Categoria cat1 = new Categoria("Informática");
		Categoria cat2 = new Categoria("Celulares");
		Categoria cat3 = new Categoria("TV-audio");
		Categoria cat4 = new Categoria("Mais-vendidos");
		Categoria cat5 = new Categoria("Mais-desejados");
		Categoria cat6 = new Categoria("Eletrodoméstico");
		Categoria cat7 = new Categoria("Melhores-ofertas");
		Categoria cat8 = new Categoria("Computadores");
		Categoria cat9 = new Categoria("Eletroportáteis");
		Categoria cat10 = new Categoria("Games-consoles");

		// Criando Produtos
		Produto p1 = new Produto("Notebook Lenovo ", 6000.00);
		Produto p2 = new Produto("Impressora HP ", 800.00);
		Produto p3 = new Produto("Mouse Sem Fio ", 80.00);
		Produto p4 = new Produto("Fone De Ouvido Xiaomi Redmi Airdots", 50.00);
		Produto p5 = new Produto("Batedeira 8 Velocidades 220W/110W", 200.00);
		Produto p6 = new Produto("TV 55 Polegadas Kaik Eletro Smart Tv LED", 9200.00);
		Produto p7 = new Produto("Playstation 4 TB", 500.00);
		Produto p8 = new Produto("Xiaomi 11 PRO", 3000.00);
		Produto p9 = new Produto("Geladeira Frost Free", 9000.00);
		Produto p10 = new Produto("Ar-condicionado LG", 100.00);

		// Criando imagens para os produtos
		ImagemProd a1 = new ImagemProd();
		a1.setImagemProduto(
				"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg");

		ImagemProd a2 = new ImagemProd();
		a2.setImagemProduto(
				"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HKPV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1483663690142");

		ImagemProd a3 = new ImagemProd();
		a3.setImagemProduto("https://images-submarino.b2w.io/produtos/01/00/item/133670/2/133670201_1GG.jpg");

		ImagemProd a4 = new ImagemProd();
		a4.setImagemProduto("https://images-submarino.b2w.io/produtos/01/00/item/133670/2/133670201_2GG.jpg");

		ImagemProd a5 = new ImagemProd();
		a5.setImagemProduto("https://images-submarino.b2w.io/produtos/01/00/img/91387/8/91387834_1GG.jpg");
 
		ImagemProd a6 = new ImagemProd();
		a6.setImagemProduto(
				"https://29028l.ha.azioncdn.net/img/2017/12/produto/66480/19/large/lado-batedeira-philco-eletrica-paris-200w-220-volts.jpg");

		ImagemProd a7 = new ImagemProd();
		a7.setImagemProduto(
				"https://29028l.ha.azioncdn.net/img/2017/12/produto/66477/19/large/cima1-batedeira-philco-eletrica-paris-200w-220-volts.jpg");

		ImagemProd a8 = new ImagemProd();
		a8.setImagemProduto("https://www.lojasmm.com/comprar/produtos/fotos500/59345.jpg");

		ImagemProd a9 = new ImagemProd();
		a9.setImagemProduto(
				"https://i.zst.com.br/images/console-playstation-4-slim-1-tb-sony-hdr-photo165939772-45-2c-3f.jpg");

		ImagemProd a10 = new ImagemProd();
		a10.setImagemProduto("https://images-na.ssl-images-amazon.com/images/I/51Fv-PIiDQL._SL1000_.jpg");

		ImagemProd a11 = new ImagemProd();
		a11.setImagemProduto("https://images-na.ssl-images-amazon.com/images/I/519szutOxBL._SL1000_.jpg");

		ImagemProd a12 = new ImagemProd();
		a12.setImagemProduto(
				"https://a-static.mlcdn.com.br/618x463/geladeira-refrigerador-top-freezer-474l-platinum-tf56s-electrolux/electrolux/2003929/b75cc8c50f2f4eb515c9a114933d7894.jpg");

		ImagemProd a13 = new ImagemProd();
		a13.setImagemProduto(
				"https://a-static.mlcdn.com.br/618x463/ar-condicionado-split-lg-12-000-btus-frio-dual-inverter-voice-s4-q12ja31c/magazineluiza/015196000/cbc0ec513610d94fa7a5a706657d3974.jpg");

		// Incluindo produtos nas categorias
		cat1.setProdutos(Arrays.asList(p1, p2, p3));
		cat2.setProdutos(Arrays.asList(p2, p6));
		cat3.setProdutos(Arrays.asList(p4, p5));
		cat4.setProdutos(Arrays.asList(p4, p5, p6));
		cat5.setProdutos(Arrays.asList(p7, p8, p9));
		cat7.setProdutos(Arrays.asList(p1, p2, p3));
		cat8.setProdutos(Arrays.asList(p8));
		cat9.setProdutos(Arrays.asList(p9, p10));
		cat10.setProdutos(Arrays.asList(p7, p8, p9));

		// Incluindo categorias nos produtos
		p1.setCategorias(Arrays.asList(cat1, cat7));
		p2.setCategorias(Arrays.asList(cat1, cat2, cat7));
		p3.setCategorias(Arrays.asList(cat1, cat7));
		p4.setCategorias(Arrays.asList(cat3, cat4));
		p5.setCategorias(Arrays.asList(cat3, cat4));
		p6.setCategorias(Arrays.asList(cat4, cat4));
		p7.setCategorias(Arrays.asList(cat10, cat5, cat6));
		p8.setCategorias(Arrays.asList(cat8, cat10, cat5));
		p9.setCategorias(Arrays.asList(cat9, cat10, cat5));
		p10.setCategorias(Arrays.asList(cat1));

		// Incluindo imagens nos produtos
		p1.setImagens(Arrays.asList(a1));
		p2.setImagens(Arrays.asList(a2));
		p3.setImagens(Arrays.asList(a3, a4, a3, a4));
		p4.setImagens(Arrays.asList(a5));
		p5.setImagens(Arrays.asList(a6, a7, a6, a7));
		p6.setImagens(Arrays.asList(a8));
		p7.setImagens(Arrays.asList(a9));
		p8.setImagens(Arrays.asList(a10, a11, a10, a11));
		p9.setImagens(Arrays.asList(a12));
		p10.setImagens(Arrays.asList(a13));
		
		p1.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p2.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p3.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p4.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p5.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p6.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p7.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p8.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p9.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		p10.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");

		// Salvando Produtos, Categorias e Imagens
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10));
		imagemRepository.saveAll(Arrays.asList(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13));
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));

		// Criando Usuario e Endereco
		Usuario u1 = new Usuario();
		Usuario u2 = new Usuario();
		EnderecoUsuario end1 = new EnderecoUsuario();
		EnderecoUsuario end2 = new EnderecoUsuario();
		EnderecoUsuario end3 = new EnderecoUsuario();

		// Dados usuario
		u1.setCelular("123456879");
		u1.setCpf("1234905387");
		u1.setDataDeNascimento("30/01/1998");
		u1.setEmail("a@a.com");
		u1.setNome("Usuario 01");
		u1.setSenha(bCryptPasswordEncoder.encode("123"));
		u1.setTelefone("1345365328");

		u2.setCelular("11438-8743");
		u2.setCpf("12345678689");
		u2.setDataDeNascimento("30/01/1998");
		u2.setEmail("b@b.com");
		u2.setNome("Usuario 02");
		u2.setSenha(bCryptPasswordEncoder.encode("123"));
		u2.setTelefone("1345328");

		// Salvando usuario
		usuarioRepository.saveAll(Arrays.asList(u1, u2));

		// Dados endereço
		end1.setCep("03254010");
		end1.setCidade("São Paulo");
		end1.setEstado("SP");
		end1.setLogradouro("Av. nove de julho");
		end1.setNumero("15A");
		end1.setFk_Usuario(u1);

		end2.setCep("08655410");
		end2.setCidade("São Paulo");
		end2.setEstado("SP");
		end2.setLogradouro("Rua das nações");
		end2.setNumero("988");
		end2.setFk_Usuario(u1);

		end3.setCep("08655410");
		end3.setCidade("São Paulo");
		end3.setEstado("SP");
		end3.setLogradouro("Alameda das Flores");
		end3.setNumero("2156");
		end3.setFk_Usuario(u2);

		// Salvando endereco
		enderecoRepository.saveAll(Arrays.asList(end1, end2, end3));

		// Teste de incluir Vendas com produtos e usuários
		Vendas v1 = new Vendas();
		Vendas v2 = new Vendas();
		Usuario u3 = new Usuario();
		Produto pro1 = new Produto();
		Produto pro2 = new Produto();
		Categoria ca1 = new Categoria();
		ImagemProd img1 = new ImagemProd();
		ImagemProd img2 = new ImagemProd();
		Item_Venda item = new Item_Venda();
		Item_Venda item2 = new Item_Venda();
		Item_Venda item3 = new Item_Venda();
		Item_Venda item4 = new Item_Venda();
		ArrayList<Item_Venda> itemArray = new ArrayList<Item_Venda>();
		ArrayList<Item_Venda> itemArray2 = new ArrayList<Item_Venda>();

		// Atributos categoria
		ca1.setNome("Eletronicos");

		// Atributos usuario
		u3.setCelular("9920-8743");
		u3.setCpf("098953487");
		u3.setDataDeNascimento("30/01/1998");
		u3.setEmail("c@c.com");
		u3.setNome("Usuario 01");
		u3.setSenha(bCryptPasswordEncoder.encode("123"));
		u3.setTelefone("846237992");

		EnderecoUsuario end4 = new EnderecoUsuario();

		end4.setCep("1923410");
		end4.setCidade("São Paulo");
		end4.setEstado("SP");
		end4.setLogradouro("Alameda das casas");
		end4.setNumero("34");
		end4.setFk_Usuario(u3);

		// Atributos imagem
		img1.setImagemProduto(
				"https://i.zst.com.br/images/console-xbox-one-s-500-gb-microsoft-4k-hdr-photo127268018-12-15-34.jpg");

		img2.setImagemProduto(
				"https://i.zst.com.br/images/smartphone-apple-iphone-11-64gb-camera-dupla-apple-a13-bionic-ios-13-photo929874933-12-1f-15.jpg");

		// Atributos produtos
		pro1.setNome("Xbox One S 500 GB");
		pro1.setPreco(6000.0);
		pro1.setCategorias(Arrays.asList(ca1));
		pro1.setImagens(Arrays.asList(img1));

		pro2.setNome("Apple iPhone 11 64GB");
		pro2.setPreco(200.0);
		pro2.setCategorias(Arrays.asList(ca1));
		pro2.setImagens(Arrays.asList(img2));
		
		pro1.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");
		
		pro2.setDescricao("O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto "
				+ "padrão usado por estas indústrias desde o ano de 1500");

		// Atributos vendas
		v1.setValor(5000.0);
		v1.setStatus(StatusVendas.Concluida);
		v1.setTotalItens(10);
		v1.setPagamento(StatusPagamento.Aguardando);

		v1.setUsuario(u3);

		v2.setValor(5000.0);
		v2.setStatus(StatusVendas.Concluida);
		v2.setTotalItens(10);
		v2.setPagamento(StatusPagamento.Aguardando);

		v2.setUsuario(u3);

		item.setProduto(pro1);
		item.setQuantidade(2);
		item.setVenda(v1);

		item2.setProduto(pro2);
		item2.setQuantidade(1);
		item2.setVenda(v1);

		item3.setProduto(pro1);
		item3.setQuantidade(2);
		item3.setVenda(v2);

		item4.setProduto(pro2);
		item4.setQuantidade(5);
		item4.setVenda(v2);

		itemArray.add(item);
		itemArray.add(item2);
		itemArray2.add(item3);
		itemArray2.add(item4);

		v1.setItem(itemArray);
		v2.setItem(itemArray2);

		// Salvando dados de venda
		categoriaRepository.save(ca1);
		imagemRepository.saveAll(Arrays.asList(img1, img2));
		produtoRepository.save(pro1);
		produtoRepository.save(pro2);
		usuarioRepository.save(u3);
		enderecoRepository.saveAll(Arrays.asList(end4));

		vendasRepository.save(v1);
		vendasRepository.save(v2);
		itemRepository.save(item);
		itemRepository.save(item2);
		itemRepository.save(item3);
		itemRepository.save(item4);
	}
}
