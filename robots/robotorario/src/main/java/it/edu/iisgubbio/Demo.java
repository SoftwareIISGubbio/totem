package it.edu.iisgubbio;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Demo {
    public static void main(String[] args) throws Exception {
        // URL della sezione "Tecnologia" del sito web "[URL non valido rimosso]"
        final String URL_ORARI = "https://lnx.iisgubbio.edu.it/Orario/orario_docenti_nuovo.html";
        Document doc = Jsoup.connect(URL_ORARI).get();

        // viene dopo p
        // Elements titoli = doc.select("p + table");
        // oppure la classe finisce con _table
        Elements tabelle = doc.select("table[class$=\"_table\"]");

        for (Element tabella : tabelle) {
            Element docente = tabella.select("thead tr:first-child").get(0);
            System.out.println(docente.text());
        }
    }
}

