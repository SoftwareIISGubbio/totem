CREATE TABLE orario (
  id int AUTO_INCREMENT PRIMARY KEY,
  professore varchar(50) NOT NULL,
  aula varchar(50) NOT NULL,
  giorno int NOT NULL, -- 0 lunedì
  ora int DEFAULT NULL, -- 0 prima ora
  classe varchar(50) NOT NULL,
  materia varchar(200) NOT NULL,
  categoria varchar(15) NOT NULL -- "curricolare", "sostegno" (forse in futuro)
);