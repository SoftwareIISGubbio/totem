package it.edu.iisgubbio;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
/****************************************************************************
 * Rappresenta il documento di una circolare sul file system
 *
 * @author Filippo Nardoni
 ***************************************************************************/
public class Circolare {
    private String nome;
    private String numero;
    private String link;
    private String data;
    private String[] tipologia;

    /************************************************************************
     * Imposta il nomeCompleto del file da cui poi prendere il numero e il
     * nome
     *
     ***********************************************************************/
    public Circolare(String nomeFile, String link, String data, String tipologia){
        this.link=link;
        System.out.println(this.link);
        this.tipologia=tipologia.split(",");
        System.out.println(this.tipologia[0]);
        
        String[] valori = data.split("-");
        this.data=valori[2]+"-"+valori[1]+"-"+valori[0];
        System.out.println(this.data);
    	
    	Matcher m = patMat(nomeFile);

        if (m.find( )) {
            this.numero = m.group(1);
            this.nome = m.group(2);
            System.out.println("numero circolare: " + m.group(1) );
            System.out.println("nome circolare: " + m.group(2) );
        } else {
            System.out.println("NO MATCH");
        }
        
        
    }
    

    /************************************************************************
     * Metodo di utilità per costruire un Matcher
     *
     * @param nomeCompleto il nome completo del file
     ***********************************************************************/
    private static Matcher patMat(String nomeCompleto) {
        Pattern r = Pattern.compile("^(CIRC[0-9]+) *(.*)$");

        return r.matcher(nomeCompleto);
    }
    
	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getNumero() {
		return numero;
	}


	public void setNumero(String numero) {
		this.numero = numero;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
	}


	public String getData() {
		return data;
	}


	public void setData(String data) {
		this.data = data;
	}


	public String[] getTipologia() {
		return tipologia;
	}


	public void setTipologia(String tipologia) {
		this.tipologia = tipologia.split(",");
	}
    
    
}



