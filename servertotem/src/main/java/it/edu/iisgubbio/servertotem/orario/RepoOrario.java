package it.edu.iisgubbio.servertotem.orario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RepoOrario extends JpaRepository<Orario, Integer>{
	@Query(value="SELECT DISTINCT professore FROM orario ", 
       nativeQuery=true)
    List<String> elencaProfessori();
	
	@Query(value="SELECT DISTINCT classe FROM orario ", 
		       nativeQuery=true)
		    List<String> elencaClassi();
}
