package com.kaikeletro.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.ItemVenda;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.dto.ProdutoDTO;
import com.kaikeletro.repositories.ImagemProdutoRepository;
import com.kaikeletro.repositories.ProdutoRepository;
import com.kaikeletro.util.DTOUtil;

@Service
public class ProdutoService {

	@Autowired
	ProdutoRepository repoProduto;

	@Autowired
	ImagemProdutoRepository imagemProdutoRepository;

	public Produto createProduto(Produto prod) {

		List<ImagemProd> imagens = prod.getImagens();

		for (ImagemProd imagemProd : imagens) {
			imagemProd.setProduto(Arrays.asList(prod));
		}

		imagemProdutoRepository.saveAll(imagens);

		return repoProduto.save(prod);
	}

	public Produto createProduto(ProdutoDTO prod) {

		return repoProduto.save(  DTOUtil.produtoFromDTO(prod) );
	}

	public List<Produto> listarProdutos() {
		List<Produto> listaProduto = repoProduto.findAll();
		return listaProduto;
	}

	// Buscar produto pelo nome
	public List<Produto> findByNome(String nomeBusca) {
		List<Produto> listaProduto = repoProduto.findByNomeContaining(nomeBusca);
		return listaProduto;
	}

	public Optional<Produto> findById(int id) {
		return repoProduto.findById(id);
	}

	public Produto editProduto(int id, Produto prod) {
		Optional<Produto> p = repoProduto.findById(id);

		if (p.isPresent() == true) {
			p.get().setNome(prod.getNome());
			p.get().setDescricao(prod.getDescricao());
			p.get().setPreco(prod.getPreco());
			p.get().setCategorias(prod.getCategorias());
			return repoProduto.save(p.get());
		} else {
			return repoProduto.save(prod);
		}
	}

	public void deleteProduto(int id) {
		repoProduto.deleteById(id);
	}

	// Paginação
	public Page<Produto> findPage(int pagina, int qtdLinhas, String direcao, String campo) {
		PageRequest pageRequest = PageRequest.of(pagina, qtdLinhas, Direction.valueOf(direcao), campo);
		return repoProduto.findAll(pageRequest);
	}

	// Paginação para listar os produtos passando categoria como parametro na URL
	public Page<Produto> findDistinctByCategoriasNomeContaining(String nomeCategoria, int pagina, int qtdLinhas,
			String direcao, String campo) {

		PageRequest pageRequest = PageRequest.of(pagina, qtdLinhas, Direction.valueOf(direcao), campo);
		return repoProduto.findDistinctByCategoriasNomeContaining(nomeCategoria, pageRequest);
	}

	// Paginação para listar os produtos passando categoria como parametro na URL
	public Page<Produto> findDistinctByNomeContaining(String nomeBusca, int pagina, int qtdLinhas, String direcao,
			String campo) {

		PageRequest pageRequest = PageRequest.of(pagina, qtdLinhas, Direction.valueOf(direcao), campo);
		return repoProduto.findDistinctByNomeContaining(nomeBusca, pageRequest);
	}
	
}
