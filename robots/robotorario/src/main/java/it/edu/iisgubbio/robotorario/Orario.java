package it.edu.iisgubbio.robotorario;

import java.util.Scanner;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Orario {
	public static void main(String[] args) throws Exception {
		// URL della sezione "Tecnologia" del sito web "[URL non valido rimosso]"
		final String URL_ORARI = "https://lnx.iisgubbio.edu.it/Orario/orario_docenti_nuovo.html";
		Document doc = Jsoup.connect(URL_ORARI).get();

		// viene dopo p
		// Elements titoli = doc.select("p + table");
		// oppure la classe finisce con _table
		Elements tabelle = doc.select("table[class$=\"odd_table\"]");

		for (Element tabella : tabelle) {
			Element docente = tabella.select("thead tr:first-child").get(0);
			System.out.println(docente.text());
		}
		System.out.println("Inserisci il nome del docente per visualizzare l'orario:");
		// String nomeDocente = scanner.nextLine();
		String nomeDocente="PANFILI Edoardo";
		String classe;
		String aula ;
		String giorno;
		String ora;
	
		for (Element tabella : tabelle) {
            
            Element docente = tabella.select("thead tr:first-child").first();
            TableSpanManager gestioneSpazi =new TableSpanManager();
            if (docente.text().equals(nomeDocente)) {
            	
                Elements righe = tabella.select("tbody tr");
                int nRiga=0;
                for (Element riga : righe) {
                    Elements celle = riga.select("td");
                    for(Element cella : celle) {
                    	if(cella.select(".empty").size()==0&&cella.select(".break").size()==0&&!cella.text().isEmpty() && !cella.text().contains("Orario prodotto con")) {
                    		int nColonna=gestioneSpazi.primaLibera(nRiga);
                        	gestioneSpazi.occupa(nRiga, nColonna);
                        	classe=cella.select(".studentsset").text();
                        	aula=cella.select(".activitytag").text();
                        	giorno=cella.select(".xAxis").text();
                        	ora=riga.select(".yAxis").text();
                        	System.out.println(nomeDocente+" "+aula+" "+giorno+" "+ora+" "+classe);
                       
                        	
                        	if (cella.hasAttr("rowspan")) {
                                int rowspanValue = Integer.parseInt(cella.attr("rowspan"));
                                if (rowspanValue == 2) {
                                    gestioneSpazi.occupa(nRiga + 1, nColonna);
                                    System.out.println(nomeDocente+" "+aula+" "+giorno+" "+ora+" "+classe);
                                }
                            }
                    	}
                    	
                    	
                    }    
                    nRiga++;
                }
                
            }
        }
    }
}

