package com.kaikeletro.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.kaikeletro.domain.Admin;



public interface AdminRepository extends JpaRepository <Admin, Integer> {
	
	public Admin findOneByEmailAndSenha(String email, String senha);
	
	//public Admin findByCpfAndNivel(String cpf, int nivel);

	List<Admin> findByNomeContainsIgnoreCase(String nomeBusca);

    List<Admin> findByEmailIgnoreCase(String email);

	List<Admin> findBycpf(String cpf);
	
	List<Admin> findByNivel(int nivel);
	


}
