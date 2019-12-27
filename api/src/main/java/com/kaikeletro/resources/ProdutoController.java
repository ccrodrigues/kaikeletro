package com.kaikeletro.resources;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.domain.Produto;
import com.kaikeletro.dto.ProdutoDto;
import com.kaikeletro.exception.TratamentoDeErros;
import com.kaikeletro.services.ProdutoService;

@RestController
@RequestMapping(value="/produtos")
public class ProdutoController {
	
	@Autowired
	ProdutoService produtoService;

	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity<List <Produto> > listarProdutos(){
		return ResponseEntity.ok().body(produtoService.listarProdutos());
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<Optional <Produto> > findById(@PathVariable("id")int id){
		Optional <Produto> obj = produtoService.findById(id);
		
		if (obj.isPresent() == false) {
			throw new TratamentoDeErros(id, new Produto());
		} 
		
		return ResponseEntity.ok().body(obj);
	}
	
	//Get Produto by id DTO para o usar no Carrinho no Front
@RequestMapping(value="/carrinho/{id}", method=RequestMethod.GET)
public ResponseEntity< Optional<ProdutoDto> > findByIdDto(@PathVariable("id") int id){
		Optional<Produto> prod =  produtoService.findById(id);
		
		Optional <ProdutoDto> prodDto = prod
				.map(obj -> new ProdutoDto(obj));

	if (prod.isPresent() == false) {
			throw new TratamentoDeErros(id, new Produto());
		}
		
		return ResponseEntity.ok().body(prodDto);
	}
	
	//Get all Produto DTO para o front 
	@RequestMapping(value="/carrinho", method=RequestMethod.GET)
	public ResponseEntity< List<ProdutoDto> > getAllCategoriasDto() {
		
		List<Produto> listaProd = produtoService.listarProdutos();
		
		List<ProdutoDto> listaDto = listaProd
				.stream()
				.map(obj -> new ProdutoDto( obj ))
				.collect(Collectors.toList());
		
		return ResponseEntity.ok().body( listaDto );
	}
	
	//Buscar Produto pelo Nome
	@RequestMapping(value="/nome/{nomeBusca}", method=RequestMethod.GET)
	public ResponseEntity<List <Produto> > findProdutosByName(@PathVariable("nomeBusca")String nomeBusca){
		return ResponseEntity.ok().body(produtoService.findByNome(nomeBusca));
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Produto> createProduto(@RequestBody Produto prod){
		System.out.println(prod);
		
		
		return ResponseEntity.ok().body(produtoService.createProduto(prod));
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PATCH)
	public ResponseEntity<Produto> editProduto(@RequestBody Produto prod, @PathVariable("id") int id){
		return ResponseEntity.ok().body(produtoService.editProduto(id, prod));
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public void  deleteProduto(@PathVariable("id") int id){
		produtoService.deleteProduto(id);
	}
	
	//Paginação
	@RequestMapping(value="/page", method=RequestMethod.GET)
	public ResponseEntity< Page <Produto> > findPage(
						@RequestParam(value="pagina", defaultValue="0")int pagina,
						@RequestParam(value="qtdLinhas", defaultValue="10") int qtdLinhas,
						@RequestParam(value="direcao", defaultValue="ASC") String direcao,
						@RequestParam(value="campo", defaultValue="idProduto") String campo) {
		
		Page<Produto> pageProdutos = produtoService.findPage(pagina, qtdLinhas, direcao, campo);
		
		return ResponseEntity.ok().body(pageProdutos);
	}
	
	//Pegando uma lista de ProdutosDto
	//Criada para retornar dados objetivos
//	@RequestMapping(value="/produtosDto" , method=RequestMethod.GET)
//	public ResponseEntity< List<ProdutoDto>> getAllProdutoDto() {
//		return ResponseEntity.ok().body( produtoService.getAllProdutoDto() );
//	}
}
