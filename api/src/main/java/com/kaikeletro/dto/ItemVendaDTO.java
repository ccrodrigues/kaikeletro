package com.kaikeletro.dto;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ItemVendaDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private int id;

	private ProdutoDTO produto;

	//private VendaDTO venda;

	private int quantidade;

	public ItemVendaDTO(int id, ProdutoDTO produto, int quantidade) {
		super();
		this.id = id;
		this.produto = produto;
		//this.venda = venda;
		this.quantidade = quantidade;
	}

	public ItemVendaDTO() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
		
	public ProdutoDTO getProduto() {
		return produto;
	}

	public void setProduto(ProdutoDTO produto) {
		this.produto = produto;
	}

	@Override
	public String toString() {
		return "Item_Venda [id=" + id + ", produto=" + produto + ", quantidade=" + quantidade
				+ "]";
	}
}
