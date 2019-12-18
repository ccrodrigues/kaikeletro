package com.kaikeletro.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

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
	
	@ManyToMany(mappedBy = "vendas")
	private List<Produto> totalProdutos;
	
	@ManyToOne
	private Usuario usuario;
	
	private Date dataVenda;
	
	private String status;
	
	private int totalItens;
	
	private int totalVendas;
	
	//Construtor
	public Vendas() {
		super();
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

	public List<Produto> getTotalProdutos() {
		return totalProdutos;
	}

	public void setTotalProdutos(List<Produto> totalProdutos) {
		this.totalProdutos = totalProdutos;
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
		return "Vendas [id=" + id + ", valor=" + valor + ", totalProdutos=" + totalProdutos + ", usuario=" + usuario
				+ ", dataVenda=" + dataVenda + ", status=" + status + ", totalItens=" + totalItens + ", totalVendas="
				+ totalVendas + "]";
	}
	
	
	//HashCode
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dataVenda == null) ? 0 : dataVenda.hashCode());
		result = prime * result + id;
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		result = prime * result + totalItens;
		result = prime * result + ((totalProdutos == null) ? 0 : totalProdutos.hashCode());
		result = prime * result + totalVendas;
		result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
		long temp;
		temp = Double.doubleToLongBits(valor);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	//Equals
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Vendas other = (Vendas) obj;
		if (dataVenda == null) {
			if (other.dataVenda != null)
				return false;
		} else if (!dataVenda.equals(other.dataVenda))
			return false;
		if (id != other.id)
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		if (totalItens != other.totalItens)
			return false;
		if (totalProdutos == null) {
			if (other.totalProdutos != null)
				return false;
		} else if (!totalProdutos.equals(other.totalProdutos))
			return false;
		if (totalVendas != other.totalVendas)
			return false;
		if (usuario == null) {
			if (other.usuario != null)
				return false;
		} else if (!usuario.equals(other.usuario))
			return false;
		if (Double.doubleToLongBits(valor) != Double.doubleToLongBits(other.valor))
			return false;
		return true;
	}
}
