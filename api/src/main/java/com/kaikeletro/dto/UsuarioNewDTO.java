package com.kaikeletro.dto;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class UsuarioNewDTO {

	private int id;
	private String nome;
	private String email;
	private String nascimento;
	private String cpf;
	private String telefone;
	private String celular;
	
	private String senha;
	private String confirmarSenha;
	
	private EnderecoUsuarioDTO endereco;
	
	
	public UsuarioNewDTO() {
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
	
	
	public String getNascimento() {
		
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		try {
			this.nascimento = formatter.format(formatter.parse(nascimento));

		} catch (ParseException e) {
			e.printStackTrace();
		}
		return nascimento;
	}

	public void setNascimento(String nascimento) {
		this.nascimento = nascimento;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getConfirmarSenha() {
		return confirmarSenha;
	}

	public void setConfirmarSenha(String confirmarSenha) {
		this.confirmarSenha = confirmarSenha;
	}

	public EnderecoUsuarioDTO getEndereco() {
		return endereco;
	}

	public void setEndereco(EnderecoUsuarioDTO endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		return "UsuarioNewDTO [id=" + id + ", nome=" + nome + ", email=" + email + ", nascimento=" + nascimento
				+ ", cpf=" + cpf + ", telefone=" + telefone + ", celular=" + celular + ", senha=" + senha
				+ ", confirmarSenha=" + confirmarSenha + ", endereco=" + endereco + "]";
	}

		
}
