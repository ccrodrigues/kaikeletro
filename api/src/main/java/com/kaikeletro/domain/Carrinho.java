//package com.kaikeletro.domain;
//
//import java.util.List;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.SequenceGenerator;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "carrinho")
//public class Carrinho {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ITEM_NAME_SEQ")
//	@SequenceGenerator(sequenceName = "item_seq", allocationSize = 1, name = "ITEM_NAME_SEQ")
//	private int id;
//	
//	private List<Produto> produtos;
//	
//	private double valorFinal;
//
//	
//	
//	
//	
//	
//	//getters and setters
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public List<Produto> getProdutos() {
//		return produtos;
//	}
//
//	public void setProdutos(List<Produto> produtos) {
//		this.produtos = produtos;
//	}
//
//	public double getValorFinal() {
//		return valorFinal;
//	}
//
//	public void setValorFinal(double valorFinal) {
//		this.valorFinal = valorFinal;
//	}
//	
//	
//	
//	
//	
//	
//}
