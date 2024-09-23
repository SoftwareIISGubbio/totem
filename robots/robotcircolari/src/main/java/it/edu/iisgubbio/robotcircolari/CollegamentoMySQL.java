package it.edu.iisgubbio.robotcircolari;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class CollegamentoMySQL {
	
    public static void main(String[] args) throws Exception {
        String url = "jdbc:mariadb://10.1.0.52:3306/totem"; // Corretto qui
        String username = "totem";
        String password = "totem";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            String sql = "INSERT INTO circolari (nome,link,numero,data,famiglia,docenti,personale,alunni,albo_sindacale) VALUES ('samuele','http://uhgyfysmummy.com',456,'2024-08-10',false,false,false,false,false)";
            Statement istruzione = connection.createStatement();
            // Esecuzione della query di inserimento
            istruzione.executeUpdate(sql);
            System.out.println("Record inserito correttamente!");
        } catch (Exception e) {
        	System.out.println("negro");
            e.printStackTrace();
        }
    }
}
