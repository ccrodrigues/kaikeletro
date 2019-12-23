package com.kaikeletro.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.dto.UsuarioDto;
import com.kaikeletro.security.AuthToken;
import com.kaikeletro.security.GeradorToken;


@RestController
@RequestMapping(value = "/token")
public class AutenticacaoController {

	@Autowired
	private AuthenticationManager authenticationManager;
	 
	@Autowired
	private GeradorToken jwtTokenUtil;
	

	@RequestMapping(value = "autenticacao", method = { RequestMethod.POST })
	public ResponseEntity<AuthToken> getJwt(@RequestBody UsuarioDto professor) {

		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(professor.getEmail(), professor.getSenha()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		final String token = jwtTokenUtil.generateToken(authentication);
		
		AuthToken authToken = new AuthToken(token);
		
		return ResponseEntity.ok(authToken);
		

	}

}