package com.kaikeletro.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
public class EnderecoUsuario implements Serializable {

	/**
	 * 
	 */
	@GeneratedValue(strategy = GenerationType.AUTO)
	private static final long serialVersionUID = 1L;
	@Id
	@PrimaryKeyJoinColumn
	private int idEndereco;

	@ManyToOne
	@JsonBackReference
	private Usuario fk_Usuario;
	
	private String logradouro;
	
	private int numero;
	
	@NotNull
	private int cep;
	
	private String cidade;
	
	private String estado;

	public int getIdEndereco() {
		return idEndereco;
	}

	public void setIdEndereco(int idEndereco) {
		this.idEndereco = idEndereco;
	}


	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public int getCep() {
		return cep;
	}

	public void setCep(int cep) {
		this.cep = cep;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Usuario getFk_Usuario() {
		return fk_Usuario;
	}

	public void setFk_Usuario(Usuario fk_Usuario) {
		this.fk_Usuario = fk_Usuario;
	}

	@Override
	public String toString() {
		return "EnderecoUsuario [idEndereco=" + idEndereco + ", fk_Usuario=" + fk_Usuario + ", logradouro=" + logradouro
				+ ", numero=" + numero + ", cep=" + cep + ", cidade=" + cidade + ", estado=" + estado + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idEndereco;
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
		EnderecoUsuario other = (EnderecoUsuario) obj;
		if (idEndereco != other.idEndereco)
			return false;
		return true;
	}
		
}
