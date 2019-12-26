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

import com.kaikeletro.domain.Usuario;
import com.kaikeletro.repositories.UsuarioRepository;

@Service
public class AuthService implements UserDetailsService  {


	@Autowired
	UsuarioRepository professorRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder; 
	
	public UserDetails loadUserByUsername(String usuario) throws UsernameNotFoundException {
		
		Usuario professor = professorRepository.findByEmail(usuario);
		
		if(professor == null){
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		
		return new org.springframework.security.core.userdetails.User(professor.getEmail(), professor.getSenha(), getAuthority());
	}

	private List<SimpleGrantedAuthority> getAuthority() {
		SimpleGrantedAuthority usuario = new SimpleGrantedAuthority("ROLE_USER");
		//SimpleGrantedAuthority admin = new SimpleGrantedAuthority("ROLE_ADMIN");
		
		return Arrays.asList( usuario);
	}

}