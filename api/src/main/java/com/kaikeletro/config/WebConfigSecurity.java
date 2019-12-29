package com.kaikeletro.config;

import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.kaikeletro.security.JWTAutenticacaoFiltro;
import com.kaikeletro.security.JWTAutorizacaoFiltro;
import com.kaikeletro.security.JWTUtil;
import com.kaikeletro.services.CredentialDetailsServiceImpl;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebConfigSecurity extends WebSecurityConfigurerAdapter  {
	
	private static final String[] PUBLIC_ENDPOINTS = {
			
	};

	private static final String[] PUBLIC_ENDPOINTS_GET = {
			"/produtos/**"
	};

	private static final String[] PUBLIC_ENDPOINTS_POST = {
			"/token/**", "/cliente"
	};
		
	@Autowired
    private Environment env;
	
	@Autowired
	private CredentialDetailsServiceImpl userDetailsService;
		
	@Autowired
	private JWTUtil jwtUtil;
		
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
	    
    @Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}
     
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
    	/*
    	 * Verificando se o profile é test
    	 * */
    	if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
            http.csrf().disable().authorizeRequests().anyRequest().permitAll();
        }
    	else {
    		//desativa CORS e CSRF
    		http.cors().and().csrf().disable()
    		//autoriza requisições que: 
            .authorizeRequests()
            //todos os endpoints que estãp aqui abaixo são públicos
            .antMatchers(PUBLIC_ENDPOINTS).permitAll()                
            //todos os endpoints que estãp aqui abaixo são públicos - somente método GET
            .antMatchers(HttpMethod.GET, PUBLIC_ENDPOINTS_GET).permitAll()                
            //todos os endpoints que estãp aqui abaixo são públicos - somente método POST
            .antMatchers(HttpMethod.POST, PUBLIC_ENDPOINTS_POST).permitAll()                
            //Toda requisição deve ser autenticada - usuário e senha
            .anyRequest().authenticated()
            
            //.and()
            //A exceção é tratada aqui
            //.exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
            
            .and()
            //gerenciamenteo de sessão STATELESS
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
            
    	}
    	
        /* adicionar filtro nas requisições - o filtro abaixo é o padrão  */
    	//http.addFilterBefore(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);

    	/* vamos adicionar dois filtros : um para autenticação e outro para autorização */
    	http.addFilter(new JWTAutenticacaoFiltro(authenticationManager(), jwtUtil));
		http.addFilter(new JWTAutorizacaoFiltro(authenticationManager(), jwtUtil, userDetailsService));
             
    }

}
