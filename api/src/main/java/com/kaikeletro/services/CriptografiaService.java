package com.kaikeletro.services;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import com.kaikeletro.exception.CriptografiaException;

public class CriptografiaService {

	public static String criptografarSenha(String senha) {

		try {
			String hashSenha = gerarHash(senha); // salvando hash da senha em hashSenha
			String hashReverted = inverterHash(hashSenha); // invertando hash da senha
			byte[] criptografarSHA;
			criptografarSHA = criptografarSHA(hashReverted);
			return bytesToHex(criptografarSHA);
		} catch (Exception e) {
			throw new CriptografiaException(e);
		}

	}

//Irar receber uma String e retornar o hash criptografado MD5 
	private static String gerarHash(String senha) throws NoSuchAlgorithmException {
		MessageDigest m = MessageDigest.getInstance("MD5"); // Objeto responsavel por criptografia
		m.update(senha.getBytes(), 0, senha.length()); // Tranformando string em MD5
		return new BigInteger(1, m.digest()).toString(16); // retornando hash
	}

	//irar receber o hash criptografado MD5 e retornar a String revertida 
	private static String inverterHash(String hashSenha) {
		return new StringBuilder(hashSenha).reverse().toString();
	}

	//recebendo o hash revertido e criptografar em SHA
	private static byte[] criptografarSHA(String md5) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
		return algorithm.digest(md5.getBytes("UTF-8"));
	}

	private static String bytesToHex(byte[] hash) {
		StringBuffer hexString = new StringBuffer();
		for (int i = 0; i < hash.length; i++) {
			String hex = Integer.toHexString(0xff & hash[i]);
			if (hex.length() == 1)
				hexString.append('0');
			hexString.append(hex);
		}
		return hexString.toString();
	}
}
