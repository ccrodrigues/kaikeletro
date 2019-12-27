package com.kaikeletro.config;

import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

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
	
	
}
