package it.edu.iisgubbio;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class ParseHtml {
    public static void main(String[] args) throws Exception {
        System.out.println("ciao");
        String url = "jdbc:mysql://192.168.64.7:3306/prova";
        String username = "utente";
        String password = "password";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            String sql = "INSERT INTO rubrica (nome,telefono) VALUES ('samuele','+39vattelappesca')";
            Statement istruzione = connection.createStatement();

            // Esecuzione della query di inserimento
            istruzione.executeUpdate(sql);
            System.out.println("Record inserito correttamente!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

