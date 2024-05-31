CREATE TABLE circolari (
  id int AUTO_INCREMENT PRIMARY KEY,
  nome varchar(500) NOT NULL,
  link varchar(500) NOT NULL,
  numero int,
  data date,
  famiglia BOOLEAN,
  docenti BOOLEAN,
  personale BOOLEAN,
  alunni BOOLEAN,
  albo_sindacale BOOLEAN
);