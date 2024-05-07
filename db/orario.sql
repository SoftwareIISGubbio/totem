CREATE TABLE orario (
  id int(11)  AUTO_INCREMENT PRIMARY KEY,
  professore varchar(40) NOT NULL,
  aula varchar(10) NOT NULL,
  giorno int NOT NULL, -- 0 lunedì
  ora int DEFAULT NULL, -- 0 prima ora
  classe varchar(10) NOT NULL
) 

INSERT INTO orario (professore, aula, giorno, ora, classe) 
VALUES 
('boh', '120', 1, 0, '3t1'),
('maranghi', '223', 0, 2, '5i2'),
('maranghi', '245', 2, 3,  '3i2'),
('giammarioli', '111', 3, 3,'4b'),
('monia', '200', 4, 4,  '3a'),
('valeri', '140', 3, 1, '1t6'),
('panfili', '220', 4, 0,  '4a');