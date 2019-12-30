package com.kaikeletro;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kaikeletro.services.PopulateDBService;
import com.kaikeletro.services.SenderEmailService;



@SpringBootApplication
public class ApiApplication implements CommandLineRunner {


	@Autowired
	PopulateDBService populateDBService;
	
	@Autowired
	SenderEmailService senderEmailService; 

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		populateDBService.produtoCategoriaDemo();
		populateDBService.clienteDemo();
		populateDBService.pedidoDemo();
		
		//senderEmailService.enviarEmailSimples("ffborelli@gmail.com");
		
	}

}
