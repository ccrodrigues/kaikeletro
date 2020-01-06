package com.kaikeletro.dto;

import com.kaikeletro.domain.Categoria;

public class CategoriaDTO {
	
	private int idCategoria;
	private String nome;
	
	CategoriaDTO(){
		
	}
	
	public CategoriaDTO(Categoria obj) {
		this.idCategoria = obj.getIdCategoria();
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

	@Override
	public String toString() {
		return "CategoriaDTO [idCategoria=" + idCategoria + ", nome=" + nome + "]";
	}
	

}
