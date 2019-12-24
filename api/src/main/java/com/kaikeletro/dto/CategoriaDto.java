package com.kaikeletro.dto;

import com.kaikeletro.domain.Categoria;

public class CategoriaDto {
	
	private int idCategoria;
	private String nome;
	
	CategoriaDto(){
		
	}
	
	public CategoriaDto(Categoria obj) {
		this.idCategoria = obj.getId();
		this.nome = obj.getNome();
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
	

}
