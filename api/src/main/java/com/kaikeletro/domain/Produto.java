package com.kaikeletro.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="produto")
public class Produto implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PRODUTO_NAME_SEQ")
    @SequenceGenerator(sequenceName = "produto_seq", allocationSize = 1, name = "PRODUTO_NAME_SEQ")
	private int idProduto;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="preco")
	private double preco;
	
	@Column(name="descricao")
	private String descricao;
	
	@ManyToMany()
	@JoinTable(name="produtos_categorias",
		joinColumns = @JoinColumn(name = "produto_id"),
		inverseJoinColumns = @JoinColumn(name = "categoria_id")
	)
	@JsonIgnore
	private List<Categoria> categorias;
	
	@ManyToMany
	@JoinTable(name="produtos_imagens",
			joinColumns = @JoinColumn(name = "produto_id"),
			inverseJoinColumns = @JoinColumn(name = "imagem_id"))
	private List <ImagemProd> imagens;
	
	@OneToMany(mappedBy = "produto")
	List<Item_Venda> item;

	public Produto() {
		
	}

	public Produto(int idProduto, String nome, double preco, String descricao, List<Categoria> categorias,
			List<ImagemProd> imagens, List<Item_Venda> item) {
		super();
		this.idProduto = idProduto;
		this.nome = nome;
		this.preco = preco;
		this.descricao = descricao;
		this.categorias = categorias;
		this.imagens = imagens;
		this.item = item;
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

	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}
	
	public List<ImagemProd> getImagens() {
		return imagens;
	}

	public void setImagens(List<ImagemProd> imagens) {
		this.imagens = imagens;
	}

	public List<Item_Venda> getItem() {
		return item;
	}

	public void setItem(List<Item_Venda> item) {
		this.item = item;
	}

	@Override
	public String toString() {
		return "Produto [idProduto=" + idProduto + ", nome=" + nome + ", preco=" + preco + ", descricao=" + descricao
				+ ", categorias=" + categorias + ", imagens=" + imagens + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idProduto;
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
		Produto other = (Produto) obj;
		if (idProduto != other.idProduto)
			return false;
		return true;
	}	
}
