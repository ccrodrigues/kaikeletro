package com.kaikeletro.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.Produto;

public class ProdutoDTO {

	private int idProduto;

	private String nome;

	private double preco;

	private String descricao;

	private List<CategoriaDTO> categorias;
//
	private List<ImagemProdDTO> imagens;

	public ProdutoDTO() {

	}

	public ProdutoDTO(Produto obj) {
		this.idProduto = obj.getIdProduto();
		this.nome = obj.getNome();
		this.preco = obj.getPreco();
		this.descricao = obj.getDescricao();
		this.imagens = obj.getImagens().stream().map( objDomain -> new ImagemProdDTO(objDomain) ).collect(Collectors.toList());
		this.categorias = obj.getCategorias().stream().map( objDomain -> new CategoriaDTO(objDomain) ).collect(Collectors.toList());
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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<CategoriaDTO> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<CategoriaDTO> categorias) {
		this.categorias = categorias;
	}

	public List<ImagemProdDTO> getImagens() {
		return imagens;
	}

	public void setImagens(List<ImagemProdDTO> imagens) {
		this.imagens = imagens;
	}

	@Override
	public String toString() {
		return "ProdutoDTO [idProduto=" + idProduto + ", nome=" + nome + ", preco=" + preco + ", descricao=" + descricao
				+ ", categorias=" + categorias + ", imagens=" + imagens + "]";
	}
		
		
}