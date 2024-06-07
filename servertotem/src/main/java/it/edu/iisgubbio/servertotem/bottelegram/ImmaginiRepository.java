package it.edu.iisgubbio.servertotem.bottelegram;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ImmaginiRepository extends JpaRepository<Immagini, Integer>{
	@Query(value="SELECT DISTINCT id, username, tag, data, descrizione"
	 		+ " FROM immagini "
	 		+ "order by data desc limit :numero ",
	       nativeQuery=true)
    List<Immagini> ultime(@Param("numero") Integer n);
}

