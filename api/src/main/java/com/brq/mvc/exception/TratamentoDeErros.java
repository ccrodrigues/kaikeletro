package com.brq.mvc.exception;


public class TratamentoDeErros extends RuntimeException {

	private static final long serialVersionUID  = 1L;
	public TratamentoDeErros(int id, Object obj) {
		super ("O" + obj.getClass().getSimpleName() +
				" com id " + id  + " não foi localizado" );
	}
	
}