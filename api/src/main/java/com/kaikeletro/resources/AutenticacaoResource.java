package com.kaikeletro.resources;

import javax.servlet.http.HttpServletResponse;

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


import com.kaikeletro.dto.CredenciaisDTO;
import com.kaikeletro.exception.AuthorizationException;
import com.kaikeletro.security.AuthTokenModel;
import com.kaikeletro.security.CredencialSecurityModel;
import com.kaikeletro.security.JWTUtil;
import com.kaikeletro.services.CredendialService;

@RestController
@RequestMapping(value = "/token")
public class AutenticacaoResource {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JWTUtil jwtUtil;
	
	@RequestMapping(value = "generate", method = { RequestMethod.POST })
	public ResponseEntity<AuthTokenModel> getJwt(@RequestBody CredenciaisDTO credenciais) {
		
		System.out.println(credenciais);

		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(credenciais.getEmail(), credenciais.getSenha()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		/*final String token = jwtTokenUtil.generateToken(authentication);*/
								
		String username = ((CredencialSecurityModel) authentication.getPrincipal()).getUsername();
		String nome = ((CredencialSecurityModel) authentication.getPrincipal()).getNome();
		//String authorities = CredendialService.getAuthorityToString(authentication);
		String authorities = ((CredencialSecurityModel) authentication.getPrincipal()).getAuthorityToString();
		
		final String token = jwtUtil.generateToken(username, nome, authorities);
		
		AuthTokenModel authToken = new AuthTokenModel(token);
		
		return ResponseEntity.ok(authToken);
		
	}
	
	@RequestMapping(value = "/refresh", method = RequestMethod.POST)
	public ResponseEntity<AuthTokenModel> refreshToken(HttpServletResponse response) {
		
		CredencialSecurityModel credenciais = CredendialService.authenticated();
		System.out.println(credenciais);
		
		if (credenciais == null) {
			throw new AuthorizationException("Falha refresh token");
		}
				
		String username = credenciais.getUsername();
		String nome = credenciais.getNome();
		//String authorities = CredendialService.getAuthorityToString(authentication);
		String authorities = credenciais.getAuthorityToString();
		
		//String token = jwtUtil.generateToken(credenciais.getUsername());
		String token = jwtUtil.generateToken(username, nome, authorities);
		//response.addHeader("Authorization", "Bearer " + token);
		//response.addHeader("access-control-expose-headers", "Authorization");
		//return ResponseEntity.noContent().build();
		
		AuthTokenModel authToken = new AuthTokenModel(token);		
		return ResponseEntity.ok(authToken);
		
	}

}