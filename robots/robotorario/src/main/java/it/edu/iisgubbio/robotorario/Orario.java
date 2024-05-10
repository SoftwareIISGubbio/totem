package it.edu.iisgubbio.robotorario;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
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
		String nomeDocente;
		String classe;
		String aula ;
		String insert;
		String url = "jdbc:mysql://10.1.0.52:3306/totem";
		String username = "totem";
		String password = "totem";
		try (Connection connection = DriverManager.getConnection(url, username, password)) {
			Statement istruzione = connection.createStatement();

			for (Element tabella : tabelle) {

				Element docente = tabella.select("thead tr:first-child").first();
				TableSpanManager gestioneSpazi =new TableSpanManager();

				nomeDocente = docente.text();
				Elements righe = tabella.select("tbody tr");
				int nRiga=0;
				for (Element riga : righe) {
					Elements celle = riga.select("td");
					for(Element cella : celle) {
						if(cella.select(".empty").size()==0&&cella.select(".break").size()==0&&!cella.text().isEmpty() && !cella.text().contains("Orario prodotto con")) {
							int nColonna=gestioneSpazi.primaLibera(nRiga);
							gestioneSpazi.occupa(nRiga, nColonna);
							classe=cella.select(".studentsset").text();
							aula=cella.select(".room").text();
							if (!classe.isEmpty() && !aula.isEmpty()) {
							insert = "INSERT INTO orario (professore, aula, giorno, ora, classe) VALUES ('" + nomeDocente + "','" + aula + "','" + nColonna + "','" + nRiga + "','" + classe + "')";

							istruzione.executeUpdate(insert);
							}

							if (cella.hasAttr("rowspan")) {
								int rowspanValue = Integer.parseInt(cella.attr("rowspan"));
								if (rowspanValue == 2) {
									gestioneSpazi.occupa(nRiga + 1, nColonna);
									if (!classe.isEmpty() && !aula.isEmpty()) {
									insert = "INSERT INTO orario (professore, aula, giorno, ora, classe) VALUES ('" + nomeDocente + "','" + aula + "','" + nColonna + "','" + (nRiga+1) + "','" + classe + "')";
									istruzione.executeUpdate(insert);
									}
								}
							}
						}else {
							int nColonna=gestioneSpazi.primaLibera(nRiga);
							gestioneSpazi.occupa(nRiga, nColonna);
						}


					}    
					nRiga++;
				}


			}
		}catch (Exception e) {
			e.printStackTrace();
		}
	} 
}

