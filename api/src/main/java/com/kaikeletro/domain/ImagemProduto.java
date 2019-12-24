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
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="imagem_produto")
public class ImagemProduto implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IMAGEMPROD_NAME_SEQ")
//    @SequenceGenerator(sequenceName = "imagemprod_seq", allocationSize = 1, name = "IMAGEMPROD_NAME_SEQ")
	private int id;
	
	@Lob
	@Column(name="imagem")
	private String imagemProduto;
	
	@Column(name="descricao")
	private String descricaoImagem;
	
	@Column(name="nome")
	private String nomeImagem;
	
	@JsonIgnore
	@ManyToMany(mappedBy= "imagens")	
	private List <Produto> produto;

	public ImagemProduto() {
	}

	public ImagemProduto(int idImagem, String imagemProduto, String descricaoImagem, String nomeImagem) {
		this.id = idImagem;
		this.imagemProduto = imagemProduto;
		this.descricaoImagem = descricaoImagem;
		this.nomeImagem = nomeImagem;
	}
	

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}

	public int getId() {
		return id;
	}

	public void setId(int idImagem) {
		this.id = idImagem;
	}

	public String getImagemProduto() {
		return imagemProduto;
	}

	public void setImagemProduto(String imagemProduto) {
		this.imagemProduto = imagemProduto;
	}

	public String getDescricaoImagem() {
		return descricaoImagem;
	}

	public void setDescricaoImagem(String descricaoImagem) {
		this.descricaoImagem = descricaoImagem;
	}

	public String getNomeImagem() {
		return nomeImagem;
	}

	public void setNomeImagem(String nomeImagem) {
		this.nomeImagem = nomeImagem;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((descricaoImagem == null) ? 0 : descricaoImagem.hashCode());
		result = prime * result + id;
		result = prime * result + ((imagemProduto == null) ? 0 : imagemProduto.hashCode());
		result = prime * result + ((nomeImagem == null) ? 0 : nomeImagem.hashCode());
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
		ImagemProduto other = (ImagemProduto) obj;
		if (descricaoImagem == null) {
			if (other.descricaoImagem != null)
				return false;
		} else if (!descricaoImagem.equals(other.descricaoImagem))
			return false;
		if (id != other.id)
			return false;
		if (imagemProduto == null) {
			if (other.imagemProduto != null)
				return false;
		} else if (!imagemProduto.equals(other.imagemProduto))
			return false;
		if (nomeImagem == null) {
			if (other.nomeImagem != null)
				return false;
		} else if (!nomeImagem.equals(other.nomeImagem))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ImagemProduto [idImagem=" + id + ", imagemProduto=" + imagemProduto + ", descricaoImagem="
				+ descricaoImagem + ", nomeImagem=" + nomeImagem + "]";
	}
		
}
