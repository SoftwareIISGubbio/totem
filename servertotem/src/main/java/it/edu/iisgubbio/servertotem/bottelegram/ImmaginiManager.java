package it.edu.iisgubbio.servertotem.bottelegram;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController

public class ImmaginiManager {
	@Autowired
	ImmaginiRepository repoCampo;

	@GetMapping("/immagini/{tag}")
	 public ResponseEntity<InputStreamResource> prendiCampi(@PathVariable String tag) {
		
		
        String directoryPath = "/Users/yassedboussalham/Desktop/"; // Percorso della directory dei file
        String fileName = tag + ".jpg"; // Nome del file basato sul tag
        String filePath = directoryPath + fileName; // Percorso completo del file
        System.out.println(filePath);
        File file = new File(filePath);

        if (file.exists() && file.isFile()) {
            try {
                FileInputStream fileInputStream = new FileInputStream(file);
                InputStreamResource resource = new InputStreamResource(fileInputStream);

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.IMAGE_JPEG);
                headers.setContentDispositionFormData("attachment", fileName);

                return new ResponseEntity<>(resource, headers, HttpStatus.OK);
            } catch (IOException e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
