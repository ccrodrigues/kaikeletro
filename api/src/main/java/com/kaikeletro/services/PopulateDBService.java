package com.kaikeletro.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.Cidade;
import com.kaikeletro.domain.Cliente;
import com.kaikeletro.domain.Endereco;
import com.kaikeletro.domain.Estado;
import com.kaikeletro.domain.ImagemProduto;
import com.kaikeletro.domain.ItemPedido;
import com.kaikeletro.domain.Pagamento;
import com.kaikeletro.domain.Pedido;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.enums.EstadoPagamento;
import com.kaikeletro.domain.enums.Perfil;
import com.kaikeletro.domain.enums.TipoCliente;
import com.kaikeletro.repositories.CategoriaRepository;
import com.kaikeletro.repositories.CidadeRepository;
import com.kaikeletro.repositories.ClienteRepository;
import com.kaikeletro.repositories.EnderecoRepository;
import com.kaikeletro.repositories.EstadoRepository;
import com.kaikeletro.repositories.ImagemProdutoRepository;
import com.kaikeletro.repositories.ItemPedidoRepository;
import com.kaikeletro.repositories.PagamentoRepository;
import com.kaikeletro.repositories.PedidoRepository;
import com.kaikeletro.repositories.ProdutoRepository;

@Service
public class PopulateDBService {

	@Autowired
	ProdutoRepository produtoRepository;

	@Autowired
	CategoriaRepository categoriaRepository;

	@Autowired
	ImagemProdutoRepository imagemRepository;
	
	@Autowired
	ClienteRepository clienteRepository;
	
	@Autowired
	private EstadoRepository estadoRepository;
	
	@Autowired
	private CidadeRepository cidadeRepository;
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private PagamentoRepository pagamentoRepository;
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

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
		Categoria cat8 = new Categoria(null, "Celular");
		Categoria cat9 = new Categoria(null, "Eletrodoméstico");
		
		Categoria cat10 = new Categoria(null, "melhores-ofertas");

		Produto p1 = new Produto( "Notebook Lenovo", 6000.00);
		Produto p2 = new Produto( "Impressora HP Colorida", 800.00);
		Produto p3 = new Produto( "Mouse Sem Fio", 80.00);		
		Produto p4 = new Produto( "Toalha de rosto", 50.00);
		Produto p5 = new Produto( "Colcha Francesa", 200.00);
		Produto p6 = new Produto( "TV 55 Polegadas Kaik Eletro", 9200.00);					
		Produto p7 = new Produto( "Light and Blue", 500.00);
		Produto p8 = new Produto( "Xiaomi 11 PRO", 3000.00);
		Produto p9 = new Produto( "Geladeira Frost Free", 9000.00);

		cat1.getProdutos().addAll(Arrays.asList(p1, p2, p3));
		cat2.getProdutos().addAll(Arrays.asList(p2));
		cat3.getProdutos().addAll(Arrays.asList(p4, p5));
		cat4.getProdutos().addAll(Arrays.asList(p1, p2, p3, p6));
				
		cat7.getProdutos().addAll(Arrays.asList(p7));
		cat8.getProdutos().addAll(Arrays.asList(p8));
		cat9.getProdutos().addAll(Arrays.asList(p9));
		cat10.getProdutos().addAll(Arrays.asList(p7,p8,p9));

		p1.getCategorias().addAll(Arrays.asList(cat1, cat4));
		p2.getCategorias().addAll(Arrays.asList(cat1, cat2, cat4));
		p3.getCategorias().addAll(Arrays.asList(cat1, cat4));
		
		p4.getCategorias().addAll(Arrays.asList(cat3));
		p5.getCategorias().addAll(Arrays.asList(cat3));
		p6.getCategorias().addAll(Arrays.asList(cat4));
					
		p7.getCategorias().addAll(Arrays.asList(cat7,cat10));
		p8.getCategorias().addAll(Arrays.asList(cat8,cat10));
		p9.getCategorias().addAll(Arrays.asList(cat9,cat10));
		
		ImagemProduto a1 = new ImagemProduto(); a1.setImagemProduto(
		"https://www.saldaodainformatica.com.br/5712-thickbox_default/notebook-lenovo-ideapad-320-80yh0006br-prata-intel-core-i5-7200u-ram-8gb-hd-1tb-tela-156-windows-10.jpg"
		); 
		a1.setDescricaoImagem("Notebook Lenovo");
		a1.setNomeImagem("imagem 1");
		
		p1.setImagens(Arrays.asList(a1));
		p2.setImagens(Arrays.asList(a1));
		p3.setImagens(Arrays.asList(a1));
		p4.setImagens(Arrays.asList(a1));
		p5.setImagens(Arrays.asList(a1));
		p6.setImagens(Arrays.asList(a1));
		p7.setImagens(Arrays.asList(a1));
		p8.setImagens(Arrays.asList(a1));
		p9.setImagens(Arrays.asList(a1));

		imagemRepository.saveAll(Arrays.asList(a1));
		
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9,cat10));
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7,p8,p9));
		

	}
	
	public void clienteDemo() {
		Cliente cli1 = new Cliente(null, "Fabrizio", "admin@brq.com", "11111111111", TipoCliente.PESSOAFISICA, bCryptPasswordEncoder.encode("admin"));
		//cli1.addPerfil(Perfil.CLIENTE);
		cli1.addPerfil(Perfil.ADMIN);
		
		cli1.getTelefones().addAll(Arrays.asList("11-982733817"));
		
		Cliente cli2 = new Cliente(null, "Borelli", "cliente@brq.com", "2222222222", TipoCliente.PESSOAFISICA, bCryptPasswordEncoder.encode("cliente"));
		cli2.getTelefones().addAll(Arrays.asList("999999999", "999999999"));
		cli2.addPerfil(Perfil.CLIENTE);
		
		
		Estado est1 = new Estado(null, "São Paulo");				
		Cidade c1 = new Cidade(null, "São Paulo", est1);
		
		est1.getCidades().addAll(Arrays.asList(c1));
		
		estadoRepository.saveAll(Arrays.asList(est1));
		cidadeRepository.saveAll(Arrays.asList(c1));
		
		Endereco e1 = new Endereco(null, "Rua Boa Vista", "254", "9 Andar", "Centro", "01014925", cli1, c1);
		cli1.getEnderecos().addAll(Arrays.asList(e1));
		
		cli2.getEnderecos().addAll(Arrays.asList(e1));
		
		clienteRepository.saveAll(Arrays.asList(cli1, cli2));		
		enderecoRepository.save(e1);
			
	}
	
	public void pedidoDemo() throws ParseException {
		
		Cliente cli1 = new Cliente(null, "Cliente 1", "cliente1@brq.com", "11111111111", TipoCliente.PESSOAFISICA, bCryptPasswordEncoder.encode("cliente1"));
		cli1.addPerfil(Perfil.CLIENTE);
			
		cli1.getTelefones().addAll(Arrays.asList("11-982733817"));
		
		Estado est1 = new Estado(null, "Santa Catarina");				
		Cidade c1 = new Cidade(null, "Florianópolis", est1);
		
		est1.getCidades().addAll(Arrays.asList(c1));
		
		estadoRepository.saveAll(Arrays.asList(est1));
		cidadeRepository.saveAll(Arrays.asList(c1));
		
		Endereco e1 = new Endereco(null, "Rua Boa Vista", "254", "9 Andar", "Centro", "01014925", cli1, c1);
		cli1.getEnderecos().addAll(Arrays.asList(e1));
		
		clienteRepository.saveAll(Arrays.asList(cli1));		
		enderecoRepository.save(e1);
		
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm");
		
		Pedido ped1 = new Pedido(null, sdf.parse("25/12/2019 12:01"), cli1, e1);
		Pedido ped2 = new Pedido(null, sdf.parse("01/01/2020 19:35"), cli1, e1);
		
		Pagamento pagto1 = new Pagamento(null, EstadoPagamento.QUITADO, ped1);
		ped1.setPagamento(pagto1);
		
		Pagamento pagto2 = new Pagamento(null, EstadoPagamento.PENDENTE, ped2);
		ped2.setPagamento(pagto2);
		
		cli1.getPedidos().addAll(Arrays.asList(ped1, ped2));
		
		pedidoRepository.saveAll(Arrays.asList(ped1, ped2));
		pagamentoRepository.saveAll(Arrays.asList(pagto1, pagto2));
		
		List<Produto> listaProdutos = produtoRepository.findAll();
		
		Produto p1 = listaProdutos.get(0);
		Produto p2 = listaProdutos.get(1);
		Produto p3 = listaProdutos.get(2);
		
		ItemPedido ip1 = new ItemPedido(ped1, p1, 0.00, 1, p1.getPreco());
		ItemPedido ip2 = new ItemPedido(ped1, p2, 0.00, 2, p2.getPreco());
		ItemPedido ip3 = new ItemPedido(ped2, p3, 0.00, 1, p3.getPreco());
		
		ped1.getItens().addAll(Arrays.asList(ip1, ip2));
		ped2.getItens().addAll(Arrays.asList(ip3));
		
		p1.getItens().addAll(Arrays.asList(ip1));
		p2.getItens().addAll(Arrays.asList(ip3));
		p3.getItens().addAll(Arrays.asList(ip2));
		
		itemPedidoRepository.saveAll(Arrays.asList(ip1, ip2, ip3));
	}
}
