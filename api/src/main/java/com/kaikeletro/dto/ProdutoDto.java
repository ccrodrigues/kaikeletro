package com.kaikeletro.dto;

import java.util.List;

import com.kaikeletro.domain.ImagemProduto;
import com.kaikeletro.domain.Produto;

public class ProdutoDto {
	
	private int id;
	
	private String nome;
	
	private double preco;
	
	private List <ImagemProduto> imagens;
	
	public ProdutoDto() {
		
	}
	
	public ProdutoDto(Produto obj) {
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.preco = obj.getPreco();
		this.imagens = obj.getImagens();
}

	public int getId() {
		return id;
	}

	public void setId(int idProduto) {
		this.id = idProduto;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public List<ImagemProduto> getImagens() {
		return imagens;
	}

	public void setImagens(List<ImagemProduto> imagens) {
		this.imagens = imagens;
	}
		

}