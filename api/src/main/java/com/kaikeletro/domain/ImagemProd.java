package com.kaikeletro.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="imagem_prod")
public class ImagemProd implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	//@GeneratedValue(strategy = GenerationType.AUTO, generator = "IMAGEMPROD_NAME_SEQ")
    //@SequenceGenerator(sequenceName = "imagemprod_seq", allocationSize = 1, name = "IMAGEMPROD_NAME_SEQ")
	private int idImagem;
	
	@Lob
	@Column(name="imagem")
	private String imagemProduto;
	
	@ManyToMany(mappedBy= "imagens")
	@JsonIgnore
	private List <Produto> produto;

	public ImagemProd() {
	}

	public int getIdImagem() {
		return idImagem;
	}

	public void setIdImagem(int idImagem) {
		this.idImagem = idImagem;
	}

	public String getImagemProduto() {
		return imagemProduto;
	}

	public void setImagemProduto(String imagemProduto) {
		this.imagemProduto = imagemProduto;
	}

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idImagem;
		result = prime * result + ((imagemProduto == null) ? 0 : imagemProduto.hashCode());
		result = prime * result + ((produto == null) ? 0 : produto.hashCode());
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
		ImagemProd other = (ImagemProd) obj;
		if (idImagem != other.idImagem)
			return false;
		if (imagemProduto == null) {
			if (other.imagemProduto != null)
				return false;
		} else if (!imagemProduto.equals(other.imagemProduto))
			return false;
		if (produto == null) {
			if (other.produto != null)
				return false;
		} else if (!produto.equals(other.produto))
			return false;
		return true;
	}

	public ImagemProd(int idImagem, String imagemProduto, List<Produto> produto) {
		super();
		this.idImagem = idImagem;
		this.imagemProduto = imagemProduto;
		this.produto = produto;
	}

	
	
	
}
