package com.kaikeletro.exception;

public class CriptografiaException extends RuntimeException {

	
	public CriptografiaException(Exception e) {
		super("Erro ao converter: "+e.getMessage());
	}
}
