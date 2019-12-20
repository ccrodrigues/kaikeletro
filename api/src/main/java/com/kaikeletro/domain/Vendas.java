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

@Entity
@Table(name="vendas")
public class Vendas implements Serializable {

	private static final long serialVersionUID = 1L;
	
	//Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "VENDAS_NAME_SEQ")
    @SequenceGenerator(sequenceName = "vendas_seq", allocationSize = 1, name = "VENDAS_NAME_SEQ")
	private int id;
	
	@Column(name= "valor")
	private double valor;
	
	@OneToMany(mappedBy = "venda")
	 List<Item_Venda> item;
	
	@ManyToOne
	private Usuario usuario;
	
	@DateTimeFormat(pattern = "dd/MM/yy")
	@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yy")
	private Date dataVenda;
	
	private String status;
	
	private int totalItens;
	
	private int totalVendas;
	
	//Construtor
	public Vendas() {

	}

	public Vendas(int id, double valor, Usuario usuario, Date dataVenda, String status, int totalItens,
			int totalVendas) {
		super();
		this.id = id;
		this.valor = valor;
		this.usuario = usuario;
		this.dataVenda = dataVenda;
		this.status = status;
		this.totalItens = totalItens;
		this.totalVendas = totalVendas;
	}

	//Getters & Setters
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

	public List<Item_Venda> getItem() {
		return item;
	}

	public void setItem(List<Item_Venda> item) {
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getTotalItens() {
		return totalItens;
	}

	public void setTotalItens(int totalItens) {
		this.totalItens = totalItens;
	}

	public int getTotalVendas() {
		return totalVendas;
	}

	public void setTotalVendas(int totalVendas) {
		this.totalVendas = totalVendas;
	}

	//ToString
	@Override
	public String toString() {
		return "Vendas [id=" + id + ", valor=" + valor + ", usuario=" + usuario + ", dataVenda=" + dataVenda
				+ ", status=" + status + ", totalItens=" + totalItens + ", totalVendas=" + totalVendas + "]";
	}

	//HashCode e Equals
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
		Vendas other = (Vendas) obj;
		if (id != other.id)
			return false;
		return true;
	}		
}
