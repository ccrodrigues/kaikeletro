package com.kaikeletro.util;

import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

import com.kaikeletro.domain.Categoria;
import com.kaikeletro.domain.EnderecoUsuario;
import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.ItemVenda;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.domain.Venda;
import com.kaikeletro.dto.CategoriaDTO;
import com.kaikeletro.dto.EnderecoUsuarioDTO;
import com.kaikeletro.dto.ImagemProdDTO;
import com.kaikeletro.dto.ItemVendaDTO;
import com.kaikeletro.dto.ProdutoDTO;
import com.kaikeletro.dto.UsuarioDTO;
import com.kaikeletro.dto.UsuarioNewDTO;
import com.kaikeletro.dto.VendaDTO;

public class DTOUtil {
	
	public static Produto produtoFromDTO(ProdutoDTO prodDTO) {

		return new Produto(
				prodDTO.getIdProduto(), prodDTO.getNome(), prodDTO.getPreco(), prodDTO.getDescricao(), 
				prodDTO.getCategorias().stream().map(dto -> categoriaFromDTO(dto) ).collect(Collectors.toList()), 
				prodDTO.getImagens().stream().map(dto -> imagemProdFromDTO(dto) ).collect(Collectors.toList()), 
				null);

	}
	
	public static ItemVenda itemVendaFromDTO(ItemVendaDTO objDTO) {
		
		return new ItemVenda(
				objDTO.getId(), 
				produtoFromDTO ( objDTO.getProduto() ), 
				//vendaFromDTO ( objDTO.getVenda() ), 
				objDTO.getQuantidade()
			);
	}
	
	public static Usuario usuarioFromDTO(UsuarioDTO objDTO ) {
		
		return new Usuario(objDTO.getId(),objDTO.getNome(), objDTO.getEmail());
	}
	
	public static Venda vendaFromDTO(VendaDTO objDTO) {
				
		return new Venda(
				objDTO.getId(), 
				objDTO.getValor(), 
				usuarioFromDTO ( objDTO.getUsuario() ), 
				objDTO.getDataVenda(), 
				objDTO.getStatus(), 
				objDTO.getTotalItens() ,
				objDTO.getItem().stream().map(objDTOLambda -> itemVendaFromDTO ( objDTOLambda ) ).collect(Collectors.toList()),
				objDTO.getPagamento()
			);
		
	}
	
	public static ImagemProd ImagemProdFromDTO(ImagemProdDTO obj) {
		
		return new ImagemProd(
				obj.getIdImagem() , 
				obj.getImagemProduto(), 
				null
				//obj.getProduto().stream().map( objDomain -> new ProdutoDTO(objDomain) ).collect(Collectors.toList())
				);

	}
	
	public static Usuario usuarioNewFromDTO(UsuarioNewDTO obj) {
				
		return new Usuario(
				obj.getId(),
				Arrays.asList( enderecoUsuarioFromDTO ( obj.getEndereco() ) ) ,				
				obj.getNome(), 
				obj.getEmail(),
				obj.getSenha(),
				obj.getNascimento(),
				obj.getCpf(),
				obj.getTelefone(),
				obj.getCelular()
							
				);
		
	}
	
	public static EnderecoUsuario enderecoUsuarioFromDTO(EnderecoUsuarioDTO obj) {
		
		return new EnderecoUsuario(
				obj.getIdEndereco(),
				obj.getLogradouro(),
				obj.getNumero(),
				obj.getCep(),
				obj.getBairro(),
				obj.getCidade(),
				obj.getEstado(),
				obj.getComplemento()
				);
		
	}
	
	public static Categoria categoriaFromDTO(CategoriaDTO obj) {
		return new Categoria(obj.getIdCategoria(), obj.getNome());
	}
	
	public static ImagemProd imagemProdFromDTO(ImagemProdDTO obj) {
		return new ImagemProd(obj.getIdImagem() , obj.getImagemProduto());
	}
	
	
}
