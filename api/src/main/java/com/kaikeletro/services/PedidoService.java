package com.kaikeletro.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Cliente;
import com.kaikeletro.domain.ItemPedido;
import com.kaikeletro.domain.Pedido;
import com.kaikeletro.domain.enums.EstadoPagamento;
import com.kaikeletro.exception.AuthorizationException;
import com.kaikeletro.exception.ObjectNotFoundException;
import com.kaikeletro.repositories.ItemPedidoRepository;
import com.kaikeletro.repositories.PagamentoRepository;
import com.kaikeletro.repositories.PedidoRepository;
import com.kaikeletro.security.UserSecurityModel;



@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository repo;
		
	@Autowired
	private PagamentoRepository pagamentoRepository;
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	@Autowired
	private ProdutoService produtoService;
	
	@Autowired
	private ClienteService clienteService;
		
	public Pedido find(Integer id) {
		Optional<Pedido> obj = repo.findById(id);
		
		//return obj.get();
		
		return obj.orElseThrow( () -> new ObjectNotFoundException(
				"Objeto não encontrado! Id: " + id + ", Tipo: " + Pedido.class.getName()));
	}
	
	public Pedido insert(Pedido obj) {
		obj.setId(null);
		obj.setInstante(new Date());
		obj.setCliente(clienteService.find(obj.getCliente().getId()));
		obj.getPagamento().setEstado(EstadoPagamento.PENDENTE);
		obj.getPagamento().setPedido(obj);
		
//		if (obj.getPagamento() instanceof PagamentoComBoleto) {
//			PagamentoComBoleto pagto = (PagamentoComBoleto) obj.getPagamento();
//			boletoService.preencherPagamentoComBoleto(pagto, obj.getInstante());
//		}
		obj = repo.save(obj);
		pagamentoRepository.save(obj.getPagamento());
		for (ItemPedido ip : obj.getItens()) {
			ip.setDesconto(0.0);
			ip.setProduto(  produtoService.findById(  ip.getProduto().getId()).get()  );
			ip.setPreco(ip.getProduto().getPreco());
			ip.setPedido(obj);
		}
		itemPedidoRepository.saveAll(obj.getItens());
		
		return obj;
	}
	
	public Page<Pedido> findPage(Integer page, Integer linesPerPage, String orderBy, String direction) {
		//UserSS user = UserService.authenticated();
		UserSecurityModel user = UserService.authenticated();
		if (user == null) {
			throw new AuthorizationException("Acesso negado");
		}
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Cliente cliente =  clienteService.find(user.getId());
		return repo.findByCliente(cliente, pageRequest);
	}
}

