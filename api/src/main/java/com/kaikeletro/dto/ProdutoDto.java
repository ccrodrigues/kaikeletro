package com.kaikeletro.dto;

import java.util.List;

import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.Produto;

public class ProdutoDto {
	
	private int idProduto;
	
	private String nome;
	
	private double preco;
	
	private List <ImagemProd> imagens;
	
	public ProdutoDto() {
		
	}
	
	public ProdutoDto(Produto obj) {
		this.idProduto = obj.getIdProduto();
		this.nome = obj.getNome();
		this.preco = obj.getPreco();
		this.imagens = obj.getImagens();
}

	public int getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(int idProduto) {
		this.idProduto = idProduto;
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

	public List<ImagemProd> getImagens() {
		return imagens;
	}

	public void setImagens(List<ImagemProd> imagens) {
		this.imagens = imagens;
	}
		

}