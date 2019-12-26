package com.kaikeletro.config;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.kaikeletro.exception.StandardError;

@RestControllerAdvice
public class ErroInterceptorHandler {

	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(Exception.class)
	public StandardError handle(Exception e){
		
		StandardError error = new StandardError((long) 1111, 400, "Erro", e.getMessage(), e.getStackTrace().toString());
		
		return error;
		
		
	}
}
