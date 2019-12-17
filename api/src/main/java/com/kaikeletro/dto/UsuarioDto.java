package com.kaikeletro.dto;

import com.kaikeletro.domain.Usuario;

public class UsuarioDto {

	private int idUsuario;
	private String nome;
	private String email;
	private long celular;
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getCelular() {
		return celular;
	}
	public void setCelular(long celular) {
		this.celular = celular;
	}
	
	public UsuarioDto() {
	}

	public UsuarioDto(Usuario user) {
		this.idUsuario = user.getId();
		this.nome = user.getNome();
		this.email= user.getEmail();
		this.celular= user.getCelular();
		
	}
}
