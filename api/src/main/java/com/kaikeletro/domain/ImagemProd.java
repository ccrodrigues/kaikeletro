package com.kaikeletro.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="imagem_prod")
public class ImagemProd implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IMAGEMPROD_NAME_SEQ")
    @SequenceGenerator(sequenceName = "imagemprod_seq", allocationSize = 1, name = "IMAGEMPROD_NAME_SEQ")
	private int idImagem;
	
	@Lob
	@Column(name="imagem")
	private String imagemProduto;
	
	@Column(name="descricao")
	private String descricaoImagem;
	
	@Column(name="nome")
	private String nomeImagem;
	
	@ManyToOne
	@JoinColumn(name = "produto_id")
	private Produto produto;

	public ImagemProd() {
	}

	public ImagemProd(int idImagem, String imagemProduto, String descricaoImagem, String nomeImagem) {
		this.idImagem = idImagem;
		this.imagemProduto = imagemProduto;
		this.descricaoImagem = descricaoImagem;
		this.nomeImagem = nomeImagem;
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
		result = prime * result + idImagem;
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
		ImagemProd other = (ImagemProd) obj;
		if (descricaoImagem == null) {
			if (other.descricaoImagem != null)
				return false;
		} else if (!descricaoImagem.equals(other.descricaoImagem))
			return false;
		if (idImagem != other.idImagem)
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
		return "ImagemProduto [idImagem=" + idImagem + ", imagemProduto=" + imagemProduto + ", descricaoImagem="
				+ descricaoImagem + ", nomeImagem=" + nomeImagem + "]";
	}
	
	
	
	
}
