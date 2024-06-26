package it.edu.iisgubbio.servertotem.circolari;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name="circolari")
public class Circolare {

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
	Boolean alboSindacale;
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
	public Boolean getAlboSindacale() {
		return alboSindacale;
	}
	public void setAlboSindacale(Boolean alboSindacale) {
		this.alboSindacale = alboSindacale;
	}
}
