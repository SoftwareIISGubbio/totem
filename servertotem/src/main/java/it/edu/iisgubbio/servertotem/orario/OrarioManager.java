package it.edu.iisgubbio.servertotem.orario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrarioManager {

    @Autowired
    RepoOrario repoOra;

    @GetMapping("/orario")
    public List<Orario> cerca(
        @RequestParam(required = false) String classe,
        @RequestParam(required = false) String professore,
        @RequestParam(required = false) String aula,
        @RequestParam(required = false) String ora,
        @RequestParam(required = false) String giorno
    ) {
        Orario o = new Orario();
        o.setClasse(classe);
        o.setProfessore(professore);
        o.setAula(aula);
        o.setOra(ora);
        o.setGiorno(giorno);
        Example<Orario> example = Example.of(o);
        return repoOra.findAll( example );
    }
}
