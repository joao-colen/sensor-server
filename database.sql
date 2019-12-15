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
  ultima_medida float(50),
  latitude float(50),
  longitude float(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

insert into sensors(altura, largura, comprimento, tensao, marca, tipo, ultima_medida, latitude, longitude) values (3, 3, 3, 1.5, 'A1', 'temperatura', '50', -23.8779431, -49.8046873);