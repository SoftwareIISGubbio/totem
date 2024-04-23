package it.edu.iisgubbio;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class CollegamentoMySQL {
	
    public static void main(String[] args) throws Exception {
        String url = "http://10.1.0.52/phpmyadmin";
        String username = "totem";
        String password = "tetem";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            String sql = "INSERT INTO circolari (nome,telefono) VALUES ('samuele','+39vattelappesca')";
            Statement istruzione = connection.createStatement();

            // Esecuzione della query di inserimento
            istruzione.executeUpdate(sql);
            System.out.println("Record inserito correttamente!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

