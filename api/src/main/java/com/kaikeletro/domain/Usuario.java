package com.kaikeletro.domain;


import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import com.kaikeletro.domain.enums.Perfil;
import com.kaikeletro.domain.enums.TipoCliente;
import com.kaikeletro.dto.UsuarioDTO;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import com.sun.istack.NotNull;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@PrimaryKeyJoinColumn
	//@SequenceGenerator(sequenceName = "usuario_seq", allocationSize = 1, name = "USUARIO_NAME_SEQ")
	private int id; 
	
	@JsonManagedReference	
	@OneToMany(mappedBy = "usuarios", fetch=FetchType.EAGER)
	private List<EnderecoUsuario> idEndereco;

	@NotNull
	private String nome;

	@Column(unique = true)
	private String email;
	
	private Integer tipo;
	
	public String senha;

	public String dataDeNascimento;

	@Column(unique = true)
	@NotNull
	public String cpf;

	public String telefone;

	public String celular;
	
	
	@ElementCollection(fetch=FetchType.EAGER)
	@CollectionTable(name="PERFIS")
	private Set<Integer> perfis = new HashSet<>();
	
	public TipoCliente getTipo() {
		return TipoCliente.toEnum(tipo);
	}

	public void setTipo(TipoCliente tipo) {
		this.tipo = tipo.getCod();
	}
	
	public Usuario() {
		//Sempre adiciona o perfil cliente por padrão
		addPerfil(Perfil.CLIENTE);
	}
	
	public Usuario(int id, List<EnderecoUsuario> idEndereco, String nome, String email, String senha,
			String dataDeNascimento, String cpf, String telefone, String celular, Set<Integer> perfis, TipoCliente tipo) {
		super();
		this.id = id;
		this.idEndereco = idEndereco;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.dataDeNascimento = dataDeNascimento;
		this.cpf = cpf;
		this.telefone = telefone;
		this.celular = celular;
		this.perfis = perfis;
		this.tipo = (tipo==null) ? null : tipo.getCod();
		addPerfil(Perfil.CLIENTE);
	}
	
	public Usuario(int id, String nome, String email)
			 {
		super();
		this.id = id;		
		this.nome = nome;
		this.email = email;		
	}
		
	public void addPerfil(Perfil perfil) {
		perfis.add(perfil.getCod());
	}
	
	public Set<Perfil> getPerfis() {
		return perfis.stream().map(x -> Perfil.toEnum(x)).collect(Collectors.toSet());
	}
	
	public int getId() {
		return id;
	}
 
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

	public List<EnderecoUsuario> getIdEndereco() {
		return idEndereco;
	}

	public void setIdEndereco(List<EnderecoUsuario> idEndereco) {
		this.idEndereco = idEndereco;
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
		result = prime * result + ((celular == null) ? 0 : celular.hashCode());
		result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
		result = prime * result + ((dataDeNascimento == null) ? 0 : dataDeNascimento.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + id;
		result = prime * result + ((idEndereco == null) ? 0 : idEndereco.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((perfis == null) ? 0 : perfis.hashCode());
		result = prime * result + ((senha == null) ? 0 : senha.hashCode());
		result = prime * result + ((telefone == null) ? 0 : telefone.hashCode());
		result = prime * result + ((tipo == null) ? 0 : tipo.hashCode());
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
		if (celular == null) {
			if (other.celular != null)
				return false;
		} else if (!celular.equals(other.celular))
			return false;
		if (cpf == null) {
			if (other.cpf != null)
				return false;
		} else if (!cpf.equals(other.cpf))
			return false;
		if (dataDeNascimento == null) {
			if (other.dataDeNascimento != null)
				return false;
		} else if (!dataDeNascimento.equals(other.dataDeNascimento))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id != other.id)
			return false;
		if (idEndereco == null) {
			if (other.idEndereco != null)
				return false;
		} else if (!idEndereco.equals(other.idEndereco))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (perfis == null) {
			if (other.perfis != null)
				return false;
		} else if (!perfis.equals(other.perfis))
			return false;
		if (senha == null) {
			if (other.senha != null)
				return false;
		} else if (!senha.equals(other.senha))
			return false;
		if (telefone == null) {
			if (other.telefone != null)
				return false;
		} else if (!telefone.equals(other.telefone))
			return false;
		if (tipo == null) {
			if (other.tipo != null)
				return false;
		} else if (!tipo.equals(other.tipo))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", idEndereco=" + idEndereco + ", nome=" + nome + ", email=" + email + ", tipo="
				+ tipo + ", senha=" + senha + ", dataDeNascimento=" + dataDeNascimento + ", cpf=" + cpf + ", telefone="
				+ telefone + ", celular=" + celular + ", perfis=" + perfis + "]";
	}
	
}

