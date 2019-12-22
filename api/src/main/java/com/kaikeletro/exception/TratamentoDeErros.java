package com.kaikeletro.exception;


public class TratamentoDeErros extends RuntimeException {

	private static final long serialVersionUID  = 1L;
	public TratamentoDeErros(int id, Object obj) {
<<<<<<< HEAD

		super ("O " + obj.getClass().getSimpleName() +
				" com id " + id  + " não foi localizado" );
=======
		super ("O " + obj.getClass().getSimpleName() +" com id " + id  + " não foi localizado!" );
>>>>>>> origin/master

	}
	
}