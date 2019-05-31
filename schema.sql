DROP DATABASE IF EXISTS bancoDePalabras;

CREATE DATABASE bancoDePalabras;

USE bancoDePalabras;

CREATE TABLE palabras (
 id INT NOT NULL AUTO_INCREMENT,
 palabra VARCHAR(60) NOT NULL,
 PRIMARY KEY(id)
);
INSERT INTO palabras (palabra) VALUES ('gato = cat');
INSERT INTO palabras (palabra) VALUES ('niña = girl');
INSERT INTO palabras (palabra) VALUES ('mochila = backpack');
