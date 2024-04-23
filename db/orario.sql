CREATE TABLE `orario` (
    `id` int(11)  AUTO_INCREMENT PRIMARY KEY,
  `professore` varchar(40) NOT NULL,
  `aula` varchar(10) NOT NULL,
  `giorno` varchar(15) NOT NULL,
  `ora` varchar(25) DEFAULT NULL,
  
  `classe` varchar(10) NOT NULL
) 

INSERT INTO `orario` (`professore`, `aula`, `giorno`, `ora`, `classe`) 
VALUES 
('boh', '120', 'martedì', '12:45', '3t1'),
('maranghi', '223', 'lunedì', '10:55', '5i2'),
('maranghi', '245', 'mercoledì', '11:55',  '3i2'),
('giammarioli', '111', 'giovedì', '9:50','4b'),
('monia', '200', 'venerdì', '12:55',  '3a'),
('valeri', '140', 'lunedì', '8:55', '1t6'),
('panfili', '220', 'martedì', '8:00',  '4a');