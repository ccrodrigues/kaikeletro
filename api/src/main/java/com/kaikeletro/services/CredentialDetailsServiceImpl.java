package com.kaikeletro.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Cliente;
import com.kaikeletro.repositories.ClienteRepository;
import com.kaikeletro.security.CredencialSecurityModel;

@Service
public class CredentialDetailsServiceImpl implements UserDetailsService  {


	@Autowired
	private ClienteRepository clienteRepository;
		
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Cliente cli = clienteRepository.findByEmail(email);
		if (cli == null) {
			throw new UsernameNotFoundException(email);
		}
		return new CredencialSecurityModel(
				cli.getId(), cli.getEmail(), cli.getSenha(), 
					cli.getNome(), cli.getPerfis()
					);
	}

}
