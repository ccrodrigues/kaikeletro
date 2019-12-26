package com.kaikeletro.dto;

import com.kaikeletro.domain.Usuario;

public class UsuarioDto {

	private int idUsuario;
	private String email;
	private String senha;
	

	public UsuarioDto() {
	}

	public UsuarioDto(Usuario user) {
		this.idUsuario = user.getId();
		this.email= user.getEmail();
		this.senha= user.getSenha();
		
	}
	
	//getters and setters
	
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public String toString() {
		return "UsuarioDto [idUsuario=" + idUsuario + ", email=" + email + ", senha=" + senha + "]";
	}
	
	
}
