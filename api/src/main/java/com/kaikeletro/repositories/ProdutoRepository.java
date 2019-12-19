package com.kaikeletro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kaikeletro.domain.Produto;
import com.kaikeletro.dto.ProdutoDto;

public interface ProdutoRepository extends JpaRepository <Produto, Integer>{
	
	//SELECT * FROM produto WHERE nome LIKE
	List<Produto> findByNomeLike(String nome);
	
//	@Query("select " + 
//			"produto.id_produto, " + 
//			"produto.descricao, " + 
//			"produto.nome, " + 
//			"produto.preco, " + 
//			"categoria.nome, " + 
//			"imagem_prod.imagem " + 
//			"from produtos_categorias pc " + 
//			"inner join produto on pc.produto_id = produto.id_produto " + 
//			"inner join categoria on pc.categoria_id = categoria.id_categoria " + 
//			"inner join produtos_imagens on produto.id_produto = produtos_imagens.produto_id " + 
//			"inner join imagem_prod on imagem_prod.produto_id = produtos_imagens.produto_id")
//	List<ProdutoDto> ProdutosDto();
	
	List<Produto> findByCategorias(int categoria);
}
