package com.brq.mvc.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ResourceExceptionHandler {
	
	
	
	@ExceptionHandler(RouteNotFoundException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ResponseEntity<StandardError>	processException(Exception ex,
			HttpServletRequest request){
		 StandardError err = new StandardError(
			System.currentTimeMillis(),
			HttpStatus.NOT_FOUND.value(),
			"Não encontrado", ex.getMessage(),
			request.getRequestURI()
			
	);
	
	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
	
	
	

}


}