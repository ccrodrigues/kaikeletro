package com.kaikeletro.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.domain.Item_Venda;
import com.kaikeletro.services.ItemVendaService;

@RequestMapping(value="itens")
@RestController
public class ItemVendaController {
	
	@Autowired
	private ItemVendaService service; 
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<Item_Venda>> getAll() {

		return ResponseEntity.ok().body(service.getAll());
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public ResponseEntity<Item_Venda> saveItem(@RequestBody @Valid Item_Venda item){
		return ResponseEntity.ok().body(service.save(item));
	}
	
}