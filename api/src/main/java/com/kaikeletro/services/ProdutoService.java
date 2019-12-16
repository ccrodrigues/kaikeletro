package com.kaikeletro.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Produto;
import com.kaikeletro.repositories.ProdutoRepository;

@Service
public class ProdutoService  {
	
	@Autowired
	ProdutoRepository repoProduto;
	
	public Produto createProduto(Produto prod) {
		return repoProduto.save(prod);
	}
	
	public List<Produto> listarProdutos(){
		List<Produto> listaProduto = repoProduto.findAll();
		return listaProduto;
	}
	
	public Optional<Produto>findById(int id){
		return repoProduto.findById(id);
	}
	
	public Produto editProduto(int id, Produto prod) {
		Optional<Produto> p = repoProduto.findById(id);
		
		if(p.isPresent() == true) {
			p.get().setNome(prod.getNome());
			p.get().setDescricao(prod.getDescricao());
			p.get().setPreco(prod.getPreco());
			p.get().setCategorias(prod.getCategorias());
			return repoProduto.save(p.get());
		}else {
			return repoProduto.save(prod);
		}
	}
	
	public boolean deleteProduto(int id) {
		repoProduto.deleteById(id);
		return true;
	}
}
