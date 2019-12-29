package com.kaikeletro.security;

public class AuthTokenModel {
	
	private String token;
		

	public AuthTokenModel(String token) {
		super();
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	

}
