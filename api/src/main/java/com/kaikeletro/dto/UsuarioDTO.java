package com.kaikeletro.dto;

import com.kaikeletro.domain.Usuario;

public class UsuarioDTO {

	private int id;
	private String nome;
	private String email;

	public UsuarioDTO() {
	}

	public UsuarioDTO(Usuario user) {
		this.id = user.getId();
		this.email= user.getEmail();
			
	}
	
	//getters and setters
	
	public int getId() {
		return id;
	}
	public void setId(int idUsuario) {
		this.id = idUsuario;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
			
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "UsuarioDTO [idUsuario=" + id + ", nome=" + nome + ", email=" + email + "]";
	}

		
}
