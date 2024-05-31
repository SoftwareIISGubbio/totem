package it.edu.iisgubbio.servertotem.circolari;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RepoCircolari extends JpaRepository<Circolare, Integer>{

	 @Query(value="SELECT DISTINCT id,nome,numero,link,data,famiglia,docenti,personale,alunni,albo_sindacale"
	 		+ " FROM circolari "
	 		+ "order by numero desc limit :numero ",
	       nativeQuery=true)
	    List<Circolare> ultime(@Param("numero") Integer n);
}