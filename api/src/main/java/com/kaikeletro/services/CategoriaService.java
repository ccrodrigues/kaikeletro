package com.kaikeletro.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.Produto;
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
	
	//Buscar Categoria pelo nome
	public List<Categoria> findByNome(String nomeBusca){
		List <Categoria > listaCategoria = repoCategoria.findByNomeLike(nomeBusca);
		return listaCategoria;
	}
	
	public Categoria editCategoria(Categoria categoria, int id) {
		Optional<Categoria> c = repoCategoria.findById(id);
		
		if(c.isPresent() == true) {
			c.get().setNome(categoria.getNome());
			return repoCategoria.save(categoria);
		}else {
			return repoCategoria.save(categoria);
		}
	}
	
	public boolean deleteCategoria(int id) {
		repoCategoria.deleteById(id);
		return true;
	}
}
