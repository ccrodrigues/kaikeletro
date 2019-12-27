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

import com.kaikeletro.dto.AdminDto;
import com.kaikeletro.dto.UsuarioDto;
import com.kaikeletro.security.AuthToken;
import com.kaikeletro.security.GeradorToken;


@RestController
@RequestMapping(value = "autenticacao")
public class AutenticacaoController {

	@Autowired
	private AuthenticationManager authenticationManager;
	 
	@Autowired
	private GeradorToken jwtTokenUtil;
	

	@RequestMapping(value = "", method = { RequestMethod.POST })
	public ResponseEntity<AuthToken> getJwt(@RequestBody UsuarioDto usuario) {
		System.out.println(usuario);
		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(usuario.getEmail(), usuario.getSenha()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		final String token = jwtTokenUtil.generateToken(authentication);
		
		AuthToken authToken = new AuthToken(token);
		
		return ResponseEntity.ok(authToken);
		

	}
	
	@RequestMapping(value = "/administrador", method = { RequestMethod.POST })
	public ResponseEntity<AuthToken> getJwtAdmin(@RequestBody AdminDto admin) {
		System.out.println(admin);
		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(admin.getEmail(), admin.getSenha()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		final String token = jwtTokenUtil.generateToken(authentication);
		
		AuthToken authToken = new AuthToken(token);
		
		return ResponseEntity.ok(authToken);
		

	}

}