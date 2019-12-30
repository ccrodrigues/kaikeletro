package com.kaikeletro.dto;

import java.util.List;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.Produto;

public class ProdutoDto {
	
	private int idProduto;
	
	private String nome;
	
	private double preco;

	private String descricao;

	
	private List <Categoria> categorias;

	private List <ImagemProd> imagens;
	
	public ProdutoDto() {
		
	}
	
	public ProdutoDto(Produto obj) {


		// TODO Auto-generated constructor stub
	
		this.idProduto = obj.getIdProduto();
		this.nome = obj.getNome();
		this.preco = obj.getPreco();
		this.imagens = obj.getImagens();
		this.descricao = obj.getDescricao();
		this.categorias = obj.getCategorias();
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


	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
		result = prime * result + idProduto;
		result = prime * result + ((imagens == null) ? 0 : imagens.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		long temp;
		temp = Double.doubleToLongBits(preco);
		result = prime * result + (int) (temp ^ (temp >>> 32));
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
		ProdutoDto other = (ProdutoDto) obj;
		if (descricao == null) {
			if (other.descricao != null)
				return false;
		} else if (!descricao.equals(other.descricao))
			return false;
		if (idProduto != other.idProduto)
			return false;
		if (imagens == null) {
			if (other.imagens != null)
				return false;
		} else if (!imagens.equals(other.imagens))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (Double.doubleToLongBits(preco) != Double.doubleToLongBits(other.preco))
			return false;
		return true;
	}
	

	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}


	
}

