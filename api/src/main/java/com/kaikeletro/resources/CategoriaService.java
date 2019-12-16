package com.kaikeletro.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.repositories.CategoriaRepository;

@Service
public class CategoriaService {
	
	@Autowired
	CategoriaRepository repoCategoria;
	
	public Categoria createCategoria(Categoria categoria) {
		return repoCategoria.save(categoria);
	}
	
	public List<Categoria> listarCategorias(){
		List<Categoria> listCategorias = repoCategoria.findAll();
		return listCategorias;
	}
	
	public Optional<Categoria> findById(int id){
		return repoCategoria.findById(id);
	}
}
