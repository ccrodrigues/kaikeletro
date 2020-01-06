package com.kaikeletro.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class EnderecoUsuario implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ENDERECO_USUARIO_NAME_SEQ")
	//@SequenceGenerator(sequenceName = "endereco_usuario_seq", allocationSize = 1, name = "ENDERECO_USUARIO_NAME_SEQ")
	private int idEndereco;

    @ManyToOne
	@JsonIgnore
	@JoinColumn(name="idUsuario")
	private Usuario usuarios;
	
	private String logradouro;
	
	private String numero;
	
	@NotNull
	private String cep;
	
	private String bairro;
	
	private String cidade;
	
	private String estado;
	
	private String complemento;
	
	public EnderecoUsuario() {}
		

	public EnderecoUsuario(int idEndereco,  String logradouro, String numero, String cep, String bairro,
			String cidade, String estado, String complemento) {
		super();
		this.idEndereco = idEndereco;		
		this.logradouro = logradouro;
		this.numero = numero;
		this.cep = cep;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
		this.complemento = complemento;
	}



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

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}
		
	public String getBairro() {
		return bairro;
	}


	public void setBairro(String bairro) {
		this.bairro = bairro;
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

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public Usuario getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(Usuario usuarios) {
		this.usuarios = usuarios;
	}
		
	@Override
	public String toString() {
		return "EnderecoUsuario [idEndereco=" + idEndereco +  ", logradouro=" + logradouro
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
