package com.kaikeletro.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="categoria")
public class Categoria implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	//@GeneratedValue(strategy = GenerationType.AUTO, generator = "CATEGORIA_NAME_SEQ")
    //@SequenceGenerator(sequenceName = "categoria_seq", allocationSize = 1, name = "CATEGORIA_NAME_SEQ")
	private int idCategoria;
	
	@Column(name= "nome")
	private String nome;
	
	@ManyToMany(mappedBy = "categorias")
	@JsonIgnore
	private List<Produto> produtos;
	
	

	public Categoria() {
		
	}

	public Categoria(int idCategoria, String nome) {
		super();
		this.idCategoria = idCategoria;
		this.nome = nome;
	}

	public int getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(int idCategoria) {
		this.idCategoria = idCategoria;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Produto> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idCategoria;
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((produtos == null) ? 0 : produtos.hashCode());
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
		Categoria other = (Categoria) obj;
		if (idCategoria != other.idCategoria)
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (produtos == null) {
			if (other.produtos != null)
				return false;
		} else if (!produtos.equals(other.produtos))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Categoria [idCategoria=" + idCategoria + ", nome=" + nome + ", produtos=" + produtos + "]";
	}
	
	
	
	
	
	
	
	
	
	
	

}
