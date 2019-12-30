package com.kaikeletro.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kaikeletro.domain.Vendas;

import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class SenderEmailService  {
	
	@Value("${default.sender}")
	private String sender;
		
	@Autowired
	private MailSender mailSender;
	
	private static final Logger LOG = LoggerFactory.getLogger(SenderEmailService.class);
	
	
	public void sendConfirmacaoVendasEmail(Vendas obj) {
		SimpleMailMessage sm = criarEmailConfirmacaodePedido(obj);
		sendEmail(sm);
	}

	public SimpleMailMessage criarEmailConfirmacaodePedido(Vendas obj) {
		SimpleMailMessage sm = new SimpleMailMessage();
		sm.setTo(obj.getUsuario().getEmail());
		sm.setFrom(sender);
		sm.setSubject("Pedido aprovado! Código: " + obj.getId());
		sm.setSentDate(new Date(System.currentTimeMillis()));
		sm.setText(obj.toString());
		return sm;
	}
	public void enviarEmailSimples(String email) {
		SimpleMailMessage sm = new SimpleMailMessage();
		sm.setTo(email);
		sm.setFrom(sender);
		sm.setSubject("Teste email Kaik Eletro");
		sm.setSentDate(new Date(System.currentTimeMillis()));
		sm.setText("Teste email Kaik Eletro");
		
		sendEmail(sm);
	}
	
	public void sendEmail(SimpleMailMessage msg) {
		LOG.info("Enviando email...");
		System.out.println("Enviando email...");
		mailSender.send(msg);
		LOG.info("Email enviado");
		System.out.println("Email enviado");
	}

}
