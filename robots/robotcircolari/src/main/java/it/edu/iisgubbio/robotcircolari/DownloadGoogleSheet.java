package it.edu.iisgubbio.robotcircolari;
import java.io.InputStream;
import java.io.FileOutputStream;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

public class DownloadGoogleSheet {
    public static void main(String[] args) {
        String googleSheetUrl = "https://docs.google.com/spreadsheets/d/1EYEn6z8Q5vv3Z3hTmkK9dRtOsH20mB2T03DUodamDBo/export?format=xlsx";
        String outputFilePath = System.getProperty("user.home")+"/archivio/orario.xlsx";

        try (InputStream in = new URL(googleSheetUrl).openStream();
             ReadableByteChannel rbc = Channels.newChannel(in);
             FileOutputStream fos = new FileOutputStream(outputFilePath)) {

            fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
