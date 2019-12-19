package com.kaikeletro.domain;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

@Entity
@Table(name = "usuario")

public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USUARIO_NAME_SEQ")
	@SequenceGenerator(sequenceName = "usuario_seq", allocationSize = 1, name = "USUARIO_NAME_SEQ")
	private int id;
	
	@OneToMany(mappedBy = "fk_Usuario") //pk EnderecoUsuario
	@JsonIgnore
	@Column(name= "idUsuario")
	private List<EnderecoUsuario> idEndereco;

	@NotNull
	private String nome;

	@Column(unique = true)
	private String email;

	public int getId() {
		return id;
	}

	public String senha;

	public String dataDeNascimento;

	@Column(unique = true)
	@NotNull
	public String cpf;

	public String telefone;

	public String celular;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getDataDeNascimento() {
		return dataDeNascimento;
	}

	public void setDataDeNascimento(String dataDeNascimento) {
		
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        try {
            this.dataDeNascimento = formatter.format(formatter.parse(dataDeNascimento));

        } catch (ParseException e) {
            e.printStackTrace();
        }	
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

	public void setTelefone(String tel) {
		this.telefone = tel;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String cel) {
		this.celular = cel;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + id;
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
		Usuario other = (Usuario) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id != other.id)
			return false;
		return true;
	}
}
