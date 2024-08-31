CREATE TABLE immagini (
  id int AUTO_INCREMENT PRIMARY KEY,
  tag varchar(16) NOT NULL,
  username varchar(200) NOT NULL,
  data datetime NOT NULL,
  descrizione varchar(200) NOT NULL
);