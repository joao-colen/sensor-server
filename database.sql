CREATE DATABASE sensors;

USE sensors;

DROP TABLE IF EXISTS sensors;

CREATE TABLE sensors (
  id int NOT NULL AUTO_INCREMENT,
  altura int NOT NULL,
  largura int NOT NULL,
  comprimento int NOT NULL,
  tensao float NOT NULL,
  marca varchar(50) NOT NULL,
  tipo varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

insert into sensors(altura, largura, comprimento, tensao, marca, tipo) values (3, 3, 3, 1.5, 'A1', 'temperatura');