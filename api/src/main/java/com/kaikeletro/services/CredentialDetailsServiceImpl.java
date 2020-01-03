package com.kaikeletro.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Usuario;
import com.kaikeletro.repositories.UsuarioRepository;
import com.kaikeletro.security.CredencialSecurityModel;

@Service
public class CredentialDetailsServiceImpl implements UserDetailsService  {


	@Autowired
	private UsuarioRepository usuarioRepository;
		
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usuario user = usuarioRepository.findByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException(email);
		}
		return new CredencialSecurityModel(
				user.getId(), user.getEmail(), user.getSenha(), 
				user.getNome(), user.getPerfis()
					);
	}

}
