package com.kaikeletro.config;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import com.kaikeletro.exception.StandardError;

@RestControllerAdvice
public class ErroInterceptorHandler {

	@ResponseStatus(code = HttpStatus.METHOD_NOT_ALLOWED)
	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	public StandardError handle(HttpRequestMethodNotSupportedException e){
		System.out.println(e.toString());
		StandardError error = new StandardError( 405,e.toString()
				, e.getMessage() );
		
		return error;
	}
	@ResponseStatus(code = HttpStatus.UNAUTHORIZED)
	@ExceptionHandler(BadCredentialsException.class)
	public StandardError handle(BadCredentialsException e){
		System.out.println(e.toString());
		StandardError error = new StandardError( 401,e.toString()
				, e.getMessage() );
		
		return error;
	}
	
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(BadRequest.class)
	public StandardError handle(BadRequest e){
		System.out.println(e.toString());
		StandardError error = new StandardError( 400,e.toString()
				, e.getMessage() );
		
		return error;
	}
	
	@ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(RuntimeException.class)
	public StandardError handle(RuntimeException e){
		System.out.println(e.toString());
		StandardError error = new StandardError( 500,e.toString()
				, e.getMessage() );
		return error;
	}
	
	
}
