package com.kaikeletro.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.repositories.ImagemProdutoRepository;

@Service
public class ImagemProdutoService {
	
	@Autowired
	ImagemProdutoRepository repoImagem;
	
	public ImagemProd createImagem (ImagemProd imagem) {
		return repoImagem.save(imagem);
	}
	
	public List<ImagemProd> getAllImagens(){
		List<ImagemProd> listaImagens = repoImagem.findAll();
		return listaImagens;
	}
	
	public Optional<ImagemProd> findById(int id) {
		return repoImagem.findById(id);
	}
}
