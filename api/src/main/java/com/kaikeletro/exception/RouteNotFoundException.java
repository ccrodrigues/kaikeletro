package com.kaikeletro.exception;

public class RouteNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public RouteNotFoundException(String msg) {
		super(msg);
	}
	
	public RouteNotFoundException(String msg, Throwable cause) {
		super(msg, cause);
	}
}
