package it.edu.iisgubbio.robotorario;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Orario {
    private static String getValore(String variabile, String predefinito) {
        String v = System.getenv(variabile);
        return (v == null) ? predefinito : v;
    }

    public static void main(String[] args) throws Exception {
        final String URL_ORARI = "https://lnx.iisgubbio.edu.it/Orario/orario_docenti_nuovo.html";
        Document doc = Jsoup.connect(URL_ORARI).get();

        Elements tabelle = doc.select("table[class$=\"_table\"]");

        String nomeDocente;
        String url = getValore("TOTEM_DATABASE", "jdbc:mariadb://10.1.0.52:3306/totem");
        String username = "totem";
        String password = "totem";

        try (Connection connection = DriverManager.getConnection(url, username, password);
             Statement istruzione = connection.createStatement()) {

            // cancello tutti i record "curricolari" esistenti
            istruzione.executeUpdate("DELETE FROM orario WHERE categoria='curricolare'");

            for (Element tabella : tabelle) {
                // Element docente = tabella.select("thead tr:first-child").first();
                // HTML cambiato nel file prodotto da FET nel settembre 2024
                Element docente = tabella.select("caption span.name").first();
                TableSpanManager gestioneSpazi = new TableSpanManager();

                nomeDocente = docente.text();
                Elements righe = tabella.select("tbody tr");
                int nRiga = 0;

                for (Element riga : righe) {
                    Elements celle = riga.select("td");
                    for (Element cella : celle) {
                        if (cella.select(".empty").size() == 0 && cella.select(".break").size() == 0 && !cella.text().isEmpty() && !cella.text().contains("Orario prodotto con")) {
                            int nColonna = gestioneSpazi.primaLibera(nRiga);
                            gestioneSpazi.occupa(nRiga, nColonna);
                            String classe = cella.select(".studentsset").text();
                            String aula = cella.select(".room").text();
                            String materia = cella.select(".subject").text().replace("'", "''");
                            if(aula==null || aula.isEmpty()){
                                aula = "?aula?";
                            }
                            if (!classe.isEmpty()) {
                                String[] classiArray = classe.replaceAll("[\\(\\)\\[\\]]", "").split(",");
                                for (String singolaClasse : classiArray) {
                                    singolaClasse = singolaClasse.trim();
                                    String insert = "INSERT INTO orario (categoria, professore, aula, giorno, ora, classe, materia) VALUES ('curricolare','" + nomeDocente + "','" + aula + "','" + nColonna + "','" + nRiga + "','" + singolaClasse + "','" + materia + "')";
                                    istruzione.executeUpdate(insert);
                                }
                                if (cella.hasAttr("rowspan")) {
                                    int rowspanValue = Integer.parseInt(cella.attr("rowspan"));
                                    if (rowspanValue == 2) {
                                        gestioneSpazi.occupa(nRiga + 1, nColonna);
                                        if (!classe.isEmpty() && !aula.isEmpty()) {
                                            for (String singolaClasse : classiArray) {
                                                singolaClasse = singolaClasse.trim();
                                                String insert = "INSERT INTO orario (categoria, professore, aula, giorno, ora, classe, materia) VALUES ('curricolare','" + nomeDocente + "','" + aula + "','" + nColonna + "','" + (nRiga + 1) + "','" + singolaClasse + "','" + materia + "')";
                                                istruzione.executeUpdate(insert);
                                            }
                                        }
                                    }
                                }
                            }


                        } else {
                            int nColonna = gestioneSpazi.primaLibera(nRiga);
                            gestioneSpazi.occupa(nRiga, nColonna);
                        }
                    }
                    nRiga++;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
