package com.kaikeletro.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import org.springframework.security.core.userdetails.User;

import com.kaikeletro.domain.Cliente;
import com.kaikeletro.repositories.ClienteRepository;



@Service
public class UserDetailsServiceImpl implements UserDetailsService  {


	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder; 
	
	public UserDetails loadUserByUsername(String usuario) throws UsernameNotFoundException {
		
		Cliente loginCredenciais = clienteRepository.findByEmail(usuario);
		
		if(loginCredenciais == null){
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		
		return new User(loginCredenciais.getEmail(), loginCredenciais.getSenha(), getAuthority());
	}

	private List<SimpleGrantedAuthority> getAuthority() {
		SimpleGrantedAuthority usuario = new SimpleGrantedAuthority("ROLE_USER");
		SimpleGrantedAuthority admin = new SimpleGrantedAuthority("ROLE_ADMIN");
		
		return Arrays.asList( usuario, admin );
	}

}
