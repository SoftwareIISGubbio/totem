package it.edu.iisgubbio.robotcircolari;

import java.time.LocalDate;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
/****************************************************************************
 * Rappresenta il documento di una circolare sul file system
 *
 * @author Filippo Nardoni
 ***************************************************************************/
public class Circolare {
    private String titolo;
    private int numero;
    private String link;
    private LocalDate data;
    private Boolean famiglia=false;
	private Boolean personale=false;
    private Boolean docenti=false;
    private Boolean alunni=false;
    private Boolean alboSindacale=false;

    /************************************************************************
     * Imposta il nomeCompleto del file da cui poi prendere il numero e il
     * nome
     *
     ***********************************************************************/
    public Circolare(String nomeFile, String link, String data, String tipologia){
        setLink(link);
        
        String tipologie[] = tipologia.split(",");
        
        for (String top : tipologie) {
	        switch (top.toLowerCase().trim()) {
	        case "famiglie": 
	    		setFamiglia(true);
	    		break;
	    		
	   		case "docenti": 
	   			setDocenti(true);
	   			break;
	   		
    		case "alunni": 
	    		setAlunni(true);
	    		break;
	    	
	   		case "personale ata": 
	   			setPersonale(true);
	   			break;
	   		
	   		case "albo sindacale":
	   			setAlboSindacale(true);
	   			break;
	   		
	   		case "tutto il personale":
	   			setPersonale(true);
	   			setAlboSindacale(true);
	    		setAlunni(true);
	   			setDocenti(true);
	    		setFamiglia(true);
	    		break;
        }
	        }
        
        String[] valori = data.split("-");
        setData(LocalDate.parse(valori[2]+"-"+valori[1]+"-"+valori[0]));
    	
    	Matcher m = patMat(nomeFile);

        if (m.find( )) {
            setNumero(Integer.parseInt(m.group(1)));
            setTitolo(m.group(2)); 
        } else {
        }
    }
    
    /************************************************************************
     * Metodo di utilità per costruire un Matcher
     *
     * @param nomeCompleto il nome completo del file
     ***********************************************************************/
    
    private static Matcher patMat(String nomeCompleto) {
        Pattern r = Pattern.compile("^CIRC([0-9]+) *(.*)$");

        return r.matcher(nomeCompleto);
    }
    
	public String getTitolo() {
		return titolo;
	}


	public void setTitolo(String nome) {
		this.titolo = nome;
	}


	public int getNumero() {
		return numero;
	}


	public void setNumero(int numero) {
		this.numero = numero;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
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


	public Boolean getPersonale() {
		return personale;
	}


	public void setPersonale(Boolean personale) {
		this.personale = personale;
	}


	public Boolean getDocenti() {
		return docenti;
	}


	public void setDocenti(Boolean docenti) {
		this.docenti = docenti;
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



