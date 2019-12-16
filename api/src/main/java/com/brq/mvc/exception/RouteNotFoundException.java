package com.brq.mvc.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

public class RouteNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public RouteNotFoundException(String msg) {
		super(msg);
	}
	
	public RouteNotFoundException(String msg, Throwable cause) {
		super(msg, cause);
	}
}
