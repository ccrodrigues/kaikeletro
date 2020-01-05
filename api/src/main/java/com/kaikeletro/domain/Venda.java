package com.kaikeletro.domain;

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

@Entity
@Table(name = "vendas")
public class Venda implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	// @GeneratedValue(strategy = GenerationType.SEQUENCE, generator =
	// "VENDAS_NAME_SEQ")
	// @SequenceGenerator(sequenceName = "vendas_seq", allocationSize = 1, name =
	// "VENDAS_NAME_SEQ")
	private int id;

	@Column(name = "valor")
	private double valor;

	@OneToMany(mappedBy = "venda")
	List<ItemVenda> item;

	@ManyToOne
	private Usuario usuario;

	@DateTimeFormat(pattern = "dd-MM-yyyy HH:mm:ss")
	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
	private Date dataVenda = new Date(System.currentTimeMillis());

	// private String status;

	private StatusVendas statusVenda;

	private int totalItens;

	private StatusPagamento pagamento;

	@Column(name = "parcela")
	private int parcela;

	@Column(name = "valorParcela")
	private double valorParcela;

	// Construtor
	public Venda() {

	}

	public Venda(int id, double valor, Usuario usuario, Date dataVenda, StatusVendas status, int totalItens,
			List<ItemVenda> item, StatusPagamento pagamento) {
		super();
		this.id = id;
		this.valor = valor;
		this.usuario = usuario;
		this.dataVenda = dataVenda;
		this.statusVenda = status;
		this.totalItens = totalItens;
		this.item = item;
		this.pagamento = pagamento;
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

	public List<ItemVenda> getItem() {
		return this.item;
	}

	public void setItem(List<ItemVenda> item) {
		this.item = item;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
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

	// HashCode e Equals

	public void setPagamento(StatusPagamento pagamento) {
		this.pagamento = pagamento;
	}

	// ToString
	@Override
	public String toString() {
		return "Vendas [id=" + id + ", valor=" + valor + ", item=" + item + ", usuario=" + usuario + ", dataVenda="
				+ dataVenda + ", status=" + statusVenda + ", totalItens=" + totalItens + ", pagamento=" + pagamento
				+ "]";
	}

	// HashCode e Equals

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Venda other = (Venda) obj;
		if (id != other.id)
			return false;
		return true;

	}

}
