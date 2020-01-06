package com.kaikeletro.dto;

import com.kaikeletro.domain.Admin;

public class AdminDTO {
	
	private int idAdmin;
	private String email;
	private String senha;
	
	public AdminDTO() {
		super();
	}

	public AdminDTO(Admin admin) {
		this.idAdmin = admin.getId();
		this.email= admin.getEmail();
		this.senha= admin.getSenha();
	}

	public int getIdAdmin() {
		return idAdmin;
	}

	public void setIdAdmin(int idAdmin) {
		this.idAdmin = idAdmin;
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
		return "AdminDto [idAdmin=" + idAdmin + ", email=" + email + ", senha=" + senha + "]";
	}
	
	

}
