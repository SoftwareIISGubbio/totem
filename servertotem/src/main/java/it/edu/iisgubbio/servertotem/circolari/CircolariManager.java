package it.edu.iisgubbio.servertotem.circolari;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CircolariManager {

	@Autowired
	RepoCircolari repoCircolari;
	
	 @GetMapping("/circolari")
	    public List<Circolari> cerca(
	        @RequestParam(required = false) String nome,
	        @RequestParam(required = false) String link,
	        @RequestParam(required = false) Integer numero,
	        @RequestParam(required = false) LocalDate data,
	        @RequestParam(required = false) Boolean famiglia,
	        @RequestParam(required = false) Boolean docenti,
	        @RequestParam(required = false) Boolean personale,
	        @RequestParam(required = false) Boolean albo_sindacale,
	        @RequestParam(required = false) Boolean alunni
	    ) {
	        Circolari o = new Circolari();
	        o.setNome(nome);
	        o.setLink(link);
	        o.setNumero(numero);
	        o.setData(data);
	        o.setFamiglia(famiglia);
	        o.setAlbo_Sindacale(albo_sindacale);
	        o.setAlunni(alunni);
	        o.setDocenti(docenti);
	        o.setPersonale(personale);
	        Example<Circolari> example = Example.of(o);
	        return repoCircolari.findAll( example );
	    }
	 

	    @GetMapping("/Cerca")
	    public List<Circolari> cercaCircolari(
	            @RequestParam(required = false) Boolean docenti,
	            @RequestParam(required = false) Boolean alunni,
	            @RequestParam(required = false) Boolean personale,
	            @RequestParam(required = false) Boolean famiglia,
	            @RequestParam(required = false) Boolean albo_sindacale
	        ) {
	        Circolari c = new Circolari();
	        c.setDocenti(docenti);
	        c.setAlunni(alunni);
	        c.setPersonale(personale);
	        c.setFamiglia(famiglia);
	        c.setAlbo_Sindacale(albo_sindacale);
	        Example<Circolari> example = Example.of(c);
	        return repoCircolari.findAll( example );
	    }




	
}