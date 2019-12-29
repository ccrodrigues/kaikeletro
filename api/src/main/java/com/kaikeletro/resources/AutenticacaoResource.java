package com.kaikeletro.resources;


import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kaikeletro.domain.Cliente;
import com.kaikeletro.dto.CredenciaisDTO;
import com.kaikeletro.security.AuthTokenModel;
import com.kaikeletro.security.CredencialSecurityModel;
import com.kaikeletro.security.GeradorToken;
import com.kaikeletro.security.JWTUtil;
import com.kaikeletro.services.CredendialService;

@RestController
@RequestMapping(value = "/token")
public class AutenticacaoResource {

	@Autowired
	private AuthenticationManager authenticationManager;

//	@Autowired
//	private GeradorToken jwtTokenUtil;
	
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
		String authorities = CredendialService.getAuthorityToString(authentication);
		
		final String token = jwtUtil.generateToken(username, nome,authorities);
		
		AuthTokenModel authToken = new AuthTokenModel(token);
		
		return ResponseEntity.ok(authToken);
		
	}
	
	@RequestMapping(value = "/refresh", method = RequestMethod.POST)
	public ResponseEntity<Void> refreshToken(HttpServletResponse response) {
		CredencialSecurityModel user = CredendialService.authenticated();
		String token = jwtUtil.generateToken(user.getUsername());
		response.addHeader("Authorization", "Bearer " + token);
		response.addHeader("access-control-expose-headers", "Authorization");
		return ResponseEntity.noContent().build();
	}

}