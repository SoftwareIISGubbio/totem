package it.edu.iisgubbio.robotorario;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class InviaDati {
    public static void main(String[] args) throws Exception {
        System.out.println("ciao");
        String url = "jdbc:mysql://10.1.0.52:3306/totem";
        String username = "totem";
        String password = "totem";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            String sql = "INSERT INTO orario (professore,aula,giorno,ora,classe) VALUES ('PANFILI Edoardo','252LAB','0','0','4I')";
            Statement istruzione = connection.createStatement();

            // Esecuzione della query di inserimento
            istruzione.executeUpdate(sql);
            System.out.println("Record inserito correttamente!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}