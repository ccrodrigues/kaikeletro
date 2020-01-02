package com.kaikeletro.services;

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
	
}
