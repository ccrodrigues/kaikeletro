package com.kaikeletro.services;


import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import com.kaikeletro.security.CredencialSecurityModel;

public class CredendialService {
	
	//retorna o objeto de quem está logado
	public static CredencialSecurityModel authenticated() {
		try {
			return (CredencialSecurityModel) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		}
		catch (Exception e) {
			return null;
		}
	}
	
	/*  Pega todas as regras de acesso do usuário logado */
	public static String getAuthorityToString(Authentication authentication) {
		final String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
		return authorities;
	}

}
