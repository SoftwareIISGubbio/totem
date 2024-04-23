package it.edu.iisgubbio.servertotem.orario;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Orario {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
	
	
	String classe;
	String professore;
	String aula;
	String ora;
	String giorno;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getClasse() {
		return classe;
	}
	public void setClasse(String classe) {
		this.classe = classe;
	}
	public String getProfessore() {
		return professore;
	}
	public void setProfessore(String professore) {
		this.professore = professore;
	}
	public String getAula() {
		return aula;
	}
	public void setAula(String aula) {
		this.aula = aula;
	}
	public String getOra() {
		return ora;
	}
	public void setOra(String ora) {
		this.ora = ora;
	}
	public String getGiorno() {
		return giorno;
	}
	public void setGiorno(String giorno) {
		this.giorno = giorno;
	}
	
	
}
