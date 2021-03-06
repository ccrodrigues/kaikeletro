package com.kaikeletro.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "item_venda")
public class ItemVenda implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ITEM_NAME_SEQ")
	@SequenceGenerator(sequenceName = "item_seq", allocationSize = 1, name = "ITEM_NAME_SEQ")
	int id;

	@ManyToOne
	@JoinColumn(name = "produto_id")
	//@JsonIgnore
	Produto produto;

	@ManyToOne
	@JoinColumn(name = "venda_id")
	@JsonIgnore
	Venda venda;

	@Column(name = "quantidade")
	int quantidade;

	public ItemVenda(int id, Produto produto, int quantidade) {
		super();
		this.id = id;
		this.produto = produto;
		//this.venda = venda;
		this.quantidade = quantidade;
	}
	
	public ItemVenda() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public Venda getVenda() {
		return venda;
	}

	public void setVenda(Venda venda) {
		this.venda = venda;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

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
		ItemVenda other = (ItemVenda) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Item_Venda [id=" + id + ", produto=" + produto + ", venda=" + venda + ", quantidade=" + quantidade
				+ "]";
	}
}
