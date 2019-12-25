package com.kaikeletro.services;


import org.springframework.security.core.context.SecurityContextHolder;

import com.kaikeletro.security.UserSecurityModel;

public class UserService {
	
	public static UserSecurityModel authenticated() {
		try {
			return (UserSecurityModel) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		}
		catch (Exception e) {
			return null;
		}
	}

}
