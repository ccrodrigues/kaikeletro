package com.kaikeletro.dto;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kaikeletro.domain.ImagemProd;

public class ImagemProdDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private int idImagem;
	
	private String imagemProduto;
	
	//private List <ProdutoDTO> produtoDTO;

	public ImagemProdDTO() {
	}
	
	public ImagemProdDTO(int idImagem, String imagemProduto, List<ProdutoDTO> produto) {
		super();
		this.idImagem = idImagem;
		this.imagemProduto = imagemProduto;
		//this.produtoDTO = produto;
	}
	public ImagemProdDTO(ImagemProd obj) {
		super();
		this.idImagem = obj.getIdImagem();
		this.imagemProduto = obj.getImagemProduto();
		//this.produtoDTO = produto;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

		
}
