package com.kaikeletro.util;

import java.util.stream.Collectors;

import com.kaikeletro.domain.ImagemProd;
import com.kaikeletro.domain.ItemVenda;
import com.kaikeletro.domain.Produto;
import com.kaikeletro.domain.Usuario;
import com.kaikeletro.domain.Venda;
import com.kaikeletro.dto.ImagemProdDTO;
import com.kaikeletro.dto.ItemVendaDTO;
import com.kaikeletro.dto.ProdutoDTO;
import com.kaikeletro.dto.UsuarioDTO;
import com.kaikeletro.dto.VendaDTO;

public class DTOUtil {
	
	public static Produto produtoFromDTO(ProdutoDTO prodDTO) {

		return new Produto(prodDTO.getIdProduto(), prodDTO.getNome(), prodDTO.getPreco(), prodDTO.getDescricao(), null, null, null);

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

}
