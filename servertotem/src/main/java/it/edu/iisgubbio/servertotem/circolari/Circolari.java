package it.edu.iisgubbio.servertotem.circolari;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Circolari {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
	
	String nome;
	String link;
	Integer numero;
	LocalDate data;
	Boolean famiglia;
	Boolean docenti;
	Boolean personale;
	Boolean alunni;
	Boolean Albo_Sindacale;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public Integer getNumero() {
		return numero;
	}
	public void setNumero(Integer numero) {
		this.numero = numero;
	}
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
	}
	public Boolean getFamiglia() {
		return famiglia;
	}
	public void setFamiglia(Boolean famiglia) {
		this.famiglia = famiglia;
	}
	public Boolean getDocenti() {
		return docenti;
	}
	public void setDocenti(Boolean docenti) {
		this.docenti = docenti;
	}
	public Boolean getPersonale() {
		return personale;
	}
	public void setPersonale(Boolean personale) {
		this.personale = personale;
	}
	public Boolean getAlunni() {
		return alunni;
	}
	public void setAlunni(Boolean alunni) {
		this.alunni = alunni;
	}
	public Boolean getAlbo_Sindacale() {
		return Albo_Sindacale;
	}
	public void setAlbo_Sindacale(Boolean albo_Sindacale) {
		Albo_Sindacale = albo_Sindacale;
	}

	
	
	

}