package com.kaikeletro.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.kaikeletro.enumeration.StatusPagamento;
import com.kaikeletro.enumeration.StatusVendas;

public class VendaDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private int id;

	private double valor;

	private List<ItemVendaDTO> item;

	private UsuarioDTO usuario;

	private Date dataVenda = new Date(System.currentTimeMillis());

	private StatusVendas statusVenda;

	private int totalItens;

	private StatusPagamento pagamento;

	private int parcela;

	private double valorParcela;

	// Construtor
	public VendaDTO() {

	}

	public VendaDTO(int id, double valor, UsuarioDTO usuario, Date dataVenda, StatusVendas status, int totalItens,
			int totalVendas, List<ItemVendaDTO> itemVenda ) {
		super();
		this.id = id;
		this.valor = valor;
		this.usuario = usuario;
		this.dataVenda = dataVenda;
		this.statusVenda = status;
		this.totalItens = totalItens;
		this.item = itemVenda;
	}

	// Getters & Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public List<ItemVendaDTO> getItem() {
		return item;
	}

	public void setItem(List<ItemVendaDTO> item) {
		this.item = item;
	}

	public Date getDataVenda() {
		return dataVenda;
	}

	public void setDataVenda(Date dataVenda) {
		this.dataVenda = dataVenda;
	}

	public StatusVendas getStatus() {
		return statusVenda;
	}

	public void setStatus(StatusVendas status) {
		this.statusVenda = status;
	}

	public int getTotalItens() {
		return totalItens;
	}

	public void setTotalItens(int totalItens) {
		this.totalItens = totalItens;
	}

	public StatusPagamento getPagamento() {
		return pagamento;
	}

	public int getParcela() {
		return parcela;
	}

	public void setParcela(int parcela) {
		this.parcela = parcela;
	}

	public double getValorParcela() {
		return valorParcela;
	}

	public void setValorParcela(double valorParcela) {
		this.valorParcela = valorParcela;
	}

	public void setPagamento(StatusPagamento pagamento) {
		this.pagamento = pagamento;
	}
	
	
	public UsuarioDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioDTO usuarioDTO) {
		this.usuario = usuarioDTO;
	}

	// ToString
	@Override
	public String toString() {
		return "Vendas [id=" + id + ", valor=" + valor + ", item=" + item + ", usuario=" + usuario + ", dataVenda="
				+ dataVenda + ", status=" + statusVenda + ", totalItens=" + totalItens + ", pagamento=" + pagamento
				+ "]";
	}

}
