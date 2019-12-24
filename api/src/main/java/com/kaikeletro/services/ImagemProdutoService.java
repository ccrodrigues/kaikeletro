package com.kaikeletro.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.ImagemProduto;
import com.kaikeletro.repositories.ImagemProdutoRepository;

@Service
public class ImagemProdutoService {
	
	@Autowired
	ImagemProdutoRepository repoImagem;
	
	public ImagemProduto createImagem (ImagemProduto imagem) {
		return repoImagem.save(imagem);
	}
	
	public List<ImagemProduto> getAllImagens(){
		List<ImagemProduto> listaImagens = repoImagem.findAll();
		return listaImagens;
	}
	
	public Optional<ImagemProduto> findById(int id) {
		return repoImagem.findById(id);
	}
	
	public boolean deleteImagem(int id) {
		repoImagem.deleteById(id);
		return true;
	}
}
